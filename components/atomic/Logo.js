/** @jsx jsx */
import { jsx } from 'theme-ui'

const Logo = ({ size = 72, ...props }) => (
  <svg
    viewBox="0 0 49 78"
    fill="none"
    width={size * 0.629}
    height={size}
    sx={{
      ':hover': {
        '> path': {
          ':first-of-type': { fill: 'text.body' },
          ':last-child': { fill: 'text.light' },
        },
        transform: 'scale(1.05)',
        transition: 'all 100ms ease-in',
      },
    }}
    {...props}
  >
    <path
      d="M38.98 77.321H.166v-62.1l38.812 62.1z"
      sx={{ fill: 'text.light' }}
    />
    <path d="M48.167.521h-48v76.8l48-76.8z" sx={{ fill: 'text.body' }} />
  </svg>
)

export { Logo }
