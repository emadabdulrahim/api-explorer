export default {
  useBoxSizing: false,
  fonts: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    mono: 'sf-mono, monospace',
  },
  fontWeights: {
    body: 400,
    medium: 500,
    heading: 600,
    hero: 700,
  },
  fontSizes: {
    100: '0.75rem', // 12px
    200: '0.875rem', // 14px
    300: '1rem', // 16px
    400: '1.125rem', // 18px
    500: '1.25rem', // 20px
    600: '1.5rem', // 24px
    700: '1.75rem', // 28px
    800: '2rem', // 32px
    900: '2.5rem', // 40px
    950: '3.5rem', // 56px
  },
  letterSpacings: {
    heading: '-0.02em',
    body: '-0.025em',
    caps: '0.06em',
  },
  lineHeights: {
    hero: '1.125',
    heading: '1.25',
    body: '1.5',
  },
  colors: {
    primary: { base: '#ff8b11', light: '#3898EC' },
    error: '#e00c0c',
    text: {
      heading: 'hsl(225, 9%, 14%)',
      body: 'hsl(220, 7%, 24%)',
      muted: 'hsl(222, 7%, 44%)',
      caption: 'hsl(216, 7%, 56%)',
      light: 'hsl(216, 14%, 78%)',
    },
    background: {
      lightest: 'hsl(208, 40%, 98%)',
      lighter: '#f1f1f8',
      light: '#e1e1ea',
    },
  },
  radii: {
    small: '4px',
    big: '6px',
    pill: '9999px',
    round: '50%',
  },
  space: [
    '0',
    '0.125rem',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '3.5rem',
    '4.5rem',
    '6rem',
    '7.5.rem',
  ],

  text: {
    body: {
      color: 'text.body',
      letterSpacing: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    heading: {
      fontFamily: 'inherit',
    },
  },
  styles: {
    root: {
      fontVariantLigatures: 'normal',
      fontFamily: 'primary',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text.body',
      letterSpacing: 'body',
      WebkitFontSmoothing: 'antialiased',
    },
    strong: {
      fontWeight: 'heading',
    },
    p: {
      fontFamily: 'inherit',
      letterSpacing: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text.body',
    },
    ul: {
      paddingLeft: '1.25em',
    },
    li: {
      marginTop: 4,
      '* + *': {},
    },
    em: {
      fontFamily: 'bodyItalic',
    },
    hr: {
      border: '1px solid #f1f1f8',
      marginY: 9,
    },
    blockquote: {
      padding: '2em',
      borderLeft: '1px solid #e1e1ea',
      '> *': {
        fontFamily: 'ny-regular',
        fontSize: 700,
      },
    },
  },
}
