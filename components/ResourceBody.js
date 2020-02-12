import React from 'react'
/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { H6, H4, H5, Paragraph, Small, Input } from '../components/atomic'

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
      <Grid
        columns="max-content 1fr"
        gap={7}
        sx={{ padding: 6, alignItems: 'start' }}
      >
        {parameters.map(p => (
          <React.Fragment key={p.name}>
            <Grid gap={2}>
              <H4>
                {p.name} {p.required && <sup sx={{ color: 'red.base' }}>*</sup>}
              </H4>
              <Small sx={{ fontFamily: 'mono', fontSize: 200 }}>{p.type}</Small>
            </Grid>
            <Grid>
              <Input></Input>
              <Small>{p.description}</Small>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Section>
  )
}

export { ResourceBody }
