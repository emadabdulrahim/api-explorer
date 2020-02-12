/** @jsx jsx */
import { jsx } from 'theme-ui'
import { H6 } from '.'

const Tag = ({
  statusColor = { color: 'text.heading', background: 'background.lighter' },
  children,
}) => {
  return (
    <div
      sx={{
        height: 24,
        width: '100%',
        borderRadius: 'pill',
        backgroundColor: statusColor.background,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <H6 sx={{ color: statusColor.color }}>{children}</H6>
    </div>
  )
}

export { Tag }
