import { Text } from 'theme-ui'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const Leading = props => (
  <Styled.p
    as="p"
    sx={{
      fontSize: 600,
    }}
    {...props}
  ></Styled.p>
)

const Paragraph = props => (
  <Styled.p
    as="p"
    sx={{
      fontSize: 500,
    }}
    {...props}
  ></Styled.p>
)

const Small = props => (
  <Styled.p
    as="span"
    sx={{
      fontSize: 300,
      fontWeight: 'medium',
      color: 'text.body',
      letterSpacing: 'initial',
    }}
    {...props}
  ></Styled.p>
)

export { Leading, Paragraph, Small }
