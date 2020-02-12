import React from 'react'
/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H2, Paragraph } from '../components/atomic'

const Resource = ({ name, description, children }) => {
  return (
    <React.Fragment>
      <Grid gap={3}>
        <H2>{name}</H2>
        <Paragraph>{description}</Paragraph>
      </Grid>
      {children}
    </React.Fragment>
  )
}

export { Resource }
