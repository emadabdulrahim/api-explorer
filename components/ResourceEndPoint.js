/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph } from '../components/atomic'

const ResourceEndPoint = ({ path, methods }) => {
  const verbs = Object.keys(methods)

  return <Grid gap={3}>{path}</Grid>
}

export { ResourceEndPoint }
