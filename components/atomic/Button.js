/** @jsx jsx */
import { jsx } from 'theme-ui'
import { H6 } from '../atomic'

const Button = ({ width = '100%', height = 32, type, children }) => (
  <button
    type={type}
    sx={t => ({
      height,
      width,
      borderRadius: 'small',
      background: `linear-gradient(to bottom right, #349be5, ${t.colors.blue.base}), ${t.colors.blue.base}`,
      border: 0,
      paddingX: 24,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)',
      ':hover': {
        background: t.colors.blue.bright,
      },
      ':focus': {
        boxShadow:
          'rgba(67, 90, 111, 0.17) 0px 0px 2px inset, #349be5 0px 0px 0px 1px inset, rgba(16, 112, 202, 0.18) 0px 0px 0px 3px',
      },
      ':active': {
        background: t.colors.blue.base,
      },
    })}
  >
    <H6 sx={{ color: '#fff' }}>{children}</H6>
  </button>
)

export { Button }
