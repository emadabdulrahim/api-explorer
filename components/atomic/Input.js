/** @jsx jsx */
import { jsx } from 'theme-ui'

const Input = props => (
  <input
    type="text"
    sx={{
      height: 32,
      borderRadius: 'small',
      border: 0,
      paddingX: 4,
      maxWidth: 280,
      boxShadow:
        'rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.14) 0px 1px 2px inset;',
      ':focus': {
        boxShadow:
          'rgba(67, 90, 111, 0.14) 0px 0px 2px inset, rgb(87, 154, 217) 0px 0px 0px 1px inset, rgba(16, 112, 202, 0.14) 0px 0px 0px 3px',
      },
    }}
    {...props}
  ></input>
)

export { Input }
