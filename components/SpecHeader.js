/** @jsx jsx */
import { jsx, Styled, Grid } from 'theme-ui'
import { H1, Paragraph } from '../components/atomic'

const SpecHeader = ({ title, contact, termsOfService, description }) => {
  return (
    <div sx={{ marginBottom: 48 }}>
      <H1 sx={{ marginBottom: '0.25em' }}>{title}</H1>
      <Paragraph
        sx={{ maxWidth: '60ch', marginBottom: '1em', color: 'text.muted' }}
      >
        {description}
      </Paragraph>
      <Grid gap={3}>
        <Styled.a href={`mailto:${contact.email}`}>
          Contact the developer
        </Styled.a>
        <Styled.a href={termsOfService}>Terms of Service</Styled.a>
      </Grid>
    </div>
  )
}

export { SpecHeader }
