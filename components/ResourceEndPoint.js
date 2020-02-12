/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph, H4, Card, Tag } from '../components/atomic'
import { ResourceMethod } from '../components'

const ResourceEndPoint = ({ path, methods }) => {
  const verbs = Object.keys(methods)

  return (
    <Grid gap={5}>
      {verbs.map(v => (
        <ResourceMethod
          key={`${path}${v}${methods[v].summary}`}
          path={path}
          method={methods[v]}
          verb={v}
        ></ResourceMethod>
      ))}
    </Grid>
  )
}

export { ResourceEndPoint }
