/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H6, H4, H5, Paragraph, Small, Input } from '../components/atomic'
import { useParamsForm } from '../hooks/useParamsForm'

const Parameter = ({ name, type, isRequired }) => (
  <Grid gap={2}>
    <H4>
      {name} {isRequired && <sup sx={{ color: 'red.base' }}>*</sup>}
    </H4>
    <Small sx={{ fontFamily: 'mono', fontSize: 200 }}>{type}</Small>
  </Grid>
)

const ResourceParams = React.memo(({ params }) => {
  const { state, handleInputChange, handleFormSubmit } = useParamsForm(params)
  console.log('TCL: ResourceParams -> state', state)

  return (
    <Grid
      as="form"
      onSubmit={() => {}}
      columns="max-content 1fr"
      gap={7}
      sx={{ padding: 6, alignItems: 'start' }}
    >
      {params.map(p => (
        <React.Fragment key={p.name}>
          <Parameter
            name={p.name}
            isRequired={p.required}
            type={p.type}
          ></Parameter>
          <Grid>
            <Input
              name={p.name}
              type={p.type}
              handleInputChange={handleInputChange}
              value={state.form[p.name].value}
            ></Input>
            <Small>{p.description}</Small>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
})

export { ResourceParams }
