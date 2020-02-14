import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { H6 } from './atomic'

const ResourceSection = ({ children, title }) => (
  <div sx={{ paddingY: 4 }}>
    <div sx={{ paddingY: 5, marginLeft: 6, borderBottom: 'base' }}>
      <H6>{title}</H6>
    </div>
    {children}
  </div>
)

export { ResourceSection }
