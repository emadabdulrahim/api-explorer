import { Heading, Styled } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const H1 = props => (
  <Heading
    as="h1"
    sx={{
      fontSize: 950,
      color: 'text.heading',
      fontWeight: 'hero',
      letterSpacing: 'heading',
      lineHeight: 'hero',
    }}
    {...props}
  ></Heading>
)

const H2 = props => (
  <Styled.h2
    as="h2"
    sx={{
      fontSize: 900,
      color: 'text.heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      lineHeight: 'heading',
    }}
    {...props}
  ></Styled.h2>
)

const H3 = props => (
  <Heading
    as="h3"
    sx={{
      fontSize: 700,
      color: 'text.heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      lineHeight: 'heading',
    }}
    {...props}
  ></Heading>
)

const H4 = props => (
  <Heading
    as="h3"
    sx={{
      fontSize: 400,
      color: 'text.heading',
      fontWeight: 'medium',
      letterSpacing: 'initial',
      lineHeight: 'heading',
    }}
    {...props}
  ></Heading>
)

const H5 = props => (
  <Heading
    as="h3"
    sx={{
      fontSize: 300,
      color: 'text.body',
      fontWeight: 'medium',
      letterSpacing: 'heading',
      lineHeight: 'heading',
    }}
    {...props}
  ></Heading>
)

const H6 = props => (
  <Heading
    as="h6"
    sx={{
      fontSize: 200,
      letterSpacing: 'caps',
      textTransform: 'uppercase',
      fontWeight: 'medium',
      color: 'text.muted',
    }}
    {...props}
  ></Heading>
)

export { H1, H2, H3, H4, H5, H6 }
