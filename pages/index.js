import React from 'react'
import { H1, Paragraph, H2, Center } from '../components/atomic'
import { groupPaths, arrayToObject } from '../lib/util.js'
import apiSpec from '../temp.json'
import { Resource, ResourceEndPoint } from '../components'
/** @jsx jsx */
import { jsx, Styled, Grid } from 'theme-ui'
import Fetch from '../lib/fetch'

// This should be set when the user passes a link to the API Spec or uploads the file.
// Rethinking this: I'd just create a context that holds some global state, that would include:
// 1. https vs http
// 2. api key, auth, other options
// 3. base url

Fetch.getInstance().baseURL = `https://${apiSpec.host}${apiSpec.basePath}`

const ApiSpecHeading = ({ title, contact, termsOfService, description }) => {
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

const Index = () => {
  const paths = Object.keys(apiSpec.paths)
  const resourcesPaths = groupPaths(paths)
  const resources = Object.keys(resourcesPaths)
  const resourcesMetaInfo = arrayToObject({ list: apiSpec.tags, key: 'name' })

  return (
    <div sx={{ paddingY: 11, bg: 'background.lightest' }}>
      <Center sx={{ maxWidth: 800 }}>
        <ApiSpecHeading {...apiSpec.info} />
        <Grid gap={7}>
          {resources.map(r => {
            return (
              <Resource
                key={r}
                name={r}
                description={resourcesMetaInfo[r].description}
              >
                <Grid gap={5}>
                  {resourcesPaths[r].map(path => (
                    <ResourceEndPoint
                      path={path}
                      methods={apiSpec.paths[path]}
                    />
                  ))}
                </Grid>
              </Resource>
            )
          })}
        </Grid>
      </Center>
    </div>
  )
}

export default Index
