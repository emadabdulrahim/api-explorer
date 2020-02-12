/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph } from '../components/atomic'

const Resource = ({ name, description, children }) => {
  return (
    <div>
      <Grid gap={3}>
        <H2>{name}</H2>
        <Paragraph>{description}</Paragraph>
      </Grid>
      {children}
    </div>
  )
}

export { Resource }
