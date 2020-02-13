import React from 'react'

const paramsFormReducer = (state, event) => {
  switch (event.type) {
    case 'Fetch':
      return {
        ...state,
        status: 'fetching',
      }

    case 'Resolve':
      return {
        ...state,
        status: 'success',
        data: event.data,
      }

    case 'Reject':
      return {
        ...state,
        status: 'failure',
        error: event.error,
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

const useParamsForm = params => {
  const initialForm = React.useMemo(() => initialFormState(params), [params])

  const [state, dispatch] = React.useReducer(paramsFormReducer, {
    statue: 'idle',
    data: null,
    form: initialForm,
  })

  const handleInputChange = React.useCallback(
    ({ id, value }) => {
      console.log('TCL: value', id, value)
      dispatch({ type: 'HandleInputChange', payload: { id, value } })
    },
    [dispatch]
  )

  const handleFormSubmit = React.useCallback(
    (event, state) => {
      event.preventDefault()
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

const initialFormState = params => {
  let form = {}

  for (let p of params) {
    form[p.name] = { value: '', required: p.required }
  }

  return form
}
