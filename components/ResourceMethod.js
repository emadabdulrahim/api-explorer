/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph, H4, Card, Tag } from '../components/atomic'
import { ResourceBody } from '../components'
import { getColorForVerb } from '../lib/util'

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
      alignItems: 'center',
      borderBottom: isExpanded ? 'base' : 'none',
      paddingX: 6,
      paddingY: 5,
      position: 'sticky',
      top: 0,
      background: '#fff',
      borderRadius: isExpanded ? '6px 6px 0 0' : 'big',
      ':hover': {
        backgroundColor: 'background.lightest',
      },
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
        {isExpanded && <ResourceBody content={method} />}
      </Card>
    </div>
  )
}

export { ResourceMethod }
