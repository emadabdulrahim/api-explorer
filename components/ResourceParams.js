/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H4, Small, InputField, Button } from '../components/atomic'
import { useParamsForm } from '../hooks/useParamsForm'

const Parameter = ({ name, type, isRequired }) => (
  <Grid gap={2}>
    <H4>
      {name} {isRequired && <sup sx={{ color: 'red.base' }}>*</sup>}
    </H4>
    <Small sx={{ fontFamily: 'mono', fontSize: 200 }}>{type}</Small>
  </Grid>
)

const ResourceParams = React.memo(
  ({ params, state, handleInputChange, handleFormSubmit }) => {
    console.log('TCL: ResourceParams -> state', state)

    return (
      <Grid
        as="form"
        onSubmit={handleFormSubmit(state)}
        columns="max-content 1fr"
        gap={7}
        sx={{ padding: 6, alignItems: 'start', maxWidth: 450 }}
      >
        {params.map(p => (
          <React.Fragment key={p.name}>
            <Parameter
              name={p.name}
              isRequired={p.required}
              type={p.type}
            ></Parameter>
            <Grid>
              <InputField
                name={p.name}
                type={p.type}
                handleInputChange={handleInputChange}
                value={state.form[p.name].value}
              ></InputField>
              <Small>{p.description}</Small>
            </Grid>
          </React.Fragment>
        ))}
        <Grid sx={{ gridColumn: '1 / 3' }} gap={3}>
          {state.error && (
            <Small sx={{ color: 'red.base' }}>{state.error}</Small>
          )}
          <Button type="submit">Execute</Button>
        </Grid>
      </Grid>
    )
  }
)

export { ResourceParams }
