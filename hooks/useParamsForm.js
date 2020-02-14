import React from 'react'
import Fetch from '../lib/fetch'

const fetchInstance = Fetch.getInstance()

const paramsFormReducer = (state, event) => {
  switch (event.type) {
    case 'Fetch':
      return {
        ...state,
        status: 'fetching',
        error: '',
      }

    case 'Resolve':
      return {
        ...state,
        status: 'success',
        data: event.payload,
        error: '',
      }

    case 'Reject':
      return {
        ...state,
        status: 'failure',
        error: event.payload,
      }

    case 'HandleInputChange':
      const { id, value } = event.payload
      return {
        ...state,
        form: {
          ...state.form,
          [id]: {
            ...state.form[id],
            value: value,
          },
        },
      }

    default:
      return state
  }
}

const useParamsForm = ({ params, verb, path }) => {
  const initialForm = React.useMemo(() => initialFormState(params), [params])

  const [state, dispatch] = React.useReducer(paramsFormReducer, {
    status: 'idle',
    data: null,
    form: initialForm,
  })

  const handleInputChange = React.useCallback(
    ({ id, value }) => {
      dispatch({ type: 'HandleInputChange', payload: { id, value } })
    },
    [dispatch]
  )

  const handleFormSubmit = React.useCallback(
    state => e => {
      e.preventDefault()

      const fields = Object.keys(state.form)
      for (let id of fields) {
        const field = state.form[id]
        if (field.required && !field.value.trim()) {
          dispatch({
            type: 'Reject',
            payload: `Empty field: ${id} field can't be blank.`,
          })
          return
        }
      }

      async function fetchData() {
        const correctPath = getPath({ path, form: state.form })
        const formData = prepareFormData({ form: state.form })

        dispatch({ type: 'Fetch' })

        try {
          const result = await fetchInstance.fetchData({
            path: correctPath,
            method: verb,
            body: formData,
          })

          dispatch({ type: 'Resolve', payload: result })
        } catch (err) {
          console.error(err)
          dispatch({ type: 'Reject' })
        }
      }

      fetchData()
    },
    [dispatch]
  )

  return {
    state,
    handleInputChange,
    handleFormSubmit,
  }
}

export { useParamsForm }

const getPath = ({ path, form }) => {
  const [placeholder, fieldName] = path.match(/{(.*?)}/)

  if (!placeholder) {
    return path
  }

  return `${path.split(placeholder)[0]}${form[fieldName].value}`
}

const initialFormState = params => {
  let form = {}

  for (let p of params) {
    form[p.name] = { value: '', required: p.required, in: p.in }
  }

  return form
}

const prepareFormData = ({ form }) => {
  const fields = Object.keys(form)
  const formData = new FormData()

  for (let fieldName of fields) {
    const field = form[fieldName]
    if (field.in === 'formData') {
      formData.append(fieldName, field.value)
    }
  }

  return formData
}
