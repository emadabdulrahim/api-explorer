import React from 'react'
import { Center } from '../components/atomic'
import { groupPaths, arrayToObject } from '../lib/util.js'
import apiSpec from '../sampleSpec.json'
import { Resource, ResourceEndPoint, SpecHeader } from '../components'
/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import Fetch from '../lib/fetch'

// This should be set when the user passes a link to the API Spec or uploads the file.
// Rethinking this: I'd just create a context that holds some global state, that would include:
// 1. https vs http
// 2. api key, auth, other options
// 3. base url
Fetch.getInstance().baseURL = `https://${apiSpec.host}${apiSpec.basePath}`

const Index = () => {
  const paths = Object.keys(apiSpec.paths)
  const resourcesPaths = groupPaths(paths)
  const resources = Object.keys(resourcesPaths)
  const resourcesMetaInfo = arrayToObject({ list: apiSpec.tags, key: 'name' })

  return (
    <div sx={{ paddingY: 11, bg: 'background.lightest' }}>
      <Center sx={{ maxWidth: 800 }}>
        <SpecHeader {...apiSpec.info} />
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
