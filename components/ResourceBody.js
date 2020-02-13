import React from 'react'
/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H6, H4, H5, Paragraph, Small, Input } from '../components/atomic'
import { ResourceParams } from '../components'

const Section = ({ name, children }) => (
  <div sx={{ paddingY: 4 }}>
    <div sx={{ paddingY: 5, marginLeft: 6, borderBottom: 'base' }}>
      <H6>{name}</H6>
    </div>
    {children}
  </div>
)

const ResourceBody = ({ content: { parameters, respondes } }) => {
  return (
    <Section name={parameters && 'parameters'}>
      <ResourceParams params={parameters} />
    </Section>
  )
}

export { ResourceBody }
