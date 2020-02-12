/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph, H4, Card, Tag } from '../components/atomic'
import { getColorForVerb } from '../lib/util'

const Header = ({ verb, path, description }) => (
  <Grid columns="80px 1fr 2.5fr" gap={5} sx={{ alignItems: 'center' }}>
    <Tag statusColor={getColorForVerb(verb)}>{verb}</Tag>
    <H4 sx={{ fontFamily: 'mono' }}>{path}</H4>
    <Paragraph sx={{ color: 'text.muted' }}>{description}</Paragraph>
  </Grid>
)

const ResourceEndPoint = ({ path, methods }) => {
  const verbs = Object.keys(methods)

  return (
    <Grid gap={4}>
      {verbs.map(v => (
        <Card key={`${path}${v}`} sx={{ padding: 4 }}>
          <Header
            verb={v}
            path={path}
            description={methods[v].summary}
          ></Header>
        </Card>
      ))}
    </Grid>
  )
}

export { ResourceEndPoint }
