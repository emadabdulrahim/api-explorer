/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph, H4, Card, Tag } from '../components/atomic'
import { getColorForVerb } from '../lib/util'
import {
  ResourceParams,
  ResourceResponses,
  ResourceSection,
} from '../components'
import { useParamsForm } from '../hooks/useParamsForm'

const ResourceHeader = ({
  verb,
  path,
  description,
  isExpanded,
  toggleExpanded,
}) => (
  <Grid
    columns="80px 1fr 1.5fr"
    gap={5}
    sx={{
      ...resourceHeaderStyles,
      borderRadius: isExpanded ? '6px 6px 0 0' : 'big',
      borderBottom: isExpanded ? 'base' : 'none',
    }}
    onClick={() => toggleExpanded(v => !v)}
  >
    <Tag statusColor={getColorForVerb(verb)}>{verb}</Tag>
    <H4 sx={{ fontFamily: 'mono' }}>{path}</H4>
    <Paragraph sx={{ color: 'text.muted' }}>{description}</Paragraph>
  </Grid>
)

const ResourceMethod = ({ path, method, verb }) => {
  const [isExpanded, toggleExpanded] = React.useState(false)
  const { state, handleInputChange, handleFormSubmit } = useParamsForm({
    params: method.parameters,
    verb,
    path,
  })

  return (
    <div tabIndex={0}>
      <Card>
        <ResourceHeader
          verb={verb}
          path={path}
          description={method.summary}
          isExpanded={isExpanded}
          toggleExpanded={toggleExpanded}
        ></ResourceHeader>
        {isExpanded && (
          <React.Fragment>
            <ResourceSection title="parameters">
              <ResourceParams
                params={method.parameters}
                state={state}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </ResourceSection>
            <ResourceSection title="responses">
              <ResourceResponses
                responses={method.responses}
                data={state.data}
              />
            </ResourceSection>
          </React.Fragment>
        )}
      </Card>
    </div>
  )
}

export { ResourceMethod }

const resourceHeaderStyles = {
  alignItems: 'center',
  paddingX: 6,
  paddingY: 5,
  position: 'sticky',
  top: 0,
  cursor: 'pointer',
  background: '#fff',
  ':hover': {
    backgroundColor: 'background.lightest',
  },
}
