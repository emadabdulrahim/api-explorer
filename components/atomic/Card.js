import { Box } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Card = props => (
  <Box
    tabIndex={0}
    sx={{
      borderRadius: 'big',
      backgroundColor: '#fff',
      transition: 'box-shadow, background 200ms ease-in-out',
      cursor: 'pointer',
      // overflow: 'hidden',
      boxShadow: '0 0 1px  hsla(225, 9%, 14%, 0.67)',
      ':hover, :focus': {
        boxShadow:
          '0 0 1px  hsla(225, 9%, 14%, 0.35), 0 2px 4px -1px hsla(225, 9%, 14%, 0.05), 0 23px 30px -19px hsla(225, 9%, 14%, 0.25)',
      },
    }}
    {...props}
  ></Box>
)

export { Card }
