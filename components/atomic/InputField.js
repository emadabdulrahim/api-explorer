/** @jsx jsx */
import { jsx } from 'theme-ui'

const InputField = ({
  type = 'text',
  name,
  width = '100%',
  value,
  handleInputChange,
  ...props
}) => (
  <input
    {...props}
    name={name}
    type={type}
    value={value}
    onChange={e => {
      handleInputChange({ id: name, value: e.currentTarget.value })
    }}
    sx={{ ...inputStyles, width }}
  ></input>
)

export { InputField }

const inputStyles = {
  height: 32,
  borderRadius: 'small',
  border: 0,
  paddingX: 4,
  boxShadow:
    'rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.14) 0px 1px 2px inset;',
  ':focus': {
    boxShadow:
      'rgba(67, 90, 111, 0.14) 0px 0px 2px inset, #349be5 0px 0px 0px 1px inset, rgba(16, 112, 202, 0.14) 0px 0px 0px 3px',
  },
  '&[type=file]': {
    paddingY: 5.5,
    height: 'auto',
  },
}
