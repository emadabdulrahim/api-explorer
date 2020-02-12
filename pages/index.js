import React from 'react'
import { H1, Paragraph, H2, Center } from '../components/atomic'
import { groupPaths, arrayToObject } from '../lib/util.js'
import apiSpec from '../temp.json'
import { Resource, ResourceEndPoint } from '../components'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const ApiSpecHeading = ({
  title,
  version,
  contact,
  termsOfService,
  license,
  description,
}) => {
  return (
    <div>
      <H1>{title}</H1>
      <Paragraph sx={{ maxWidth: '60ch' }}>{description}</Paragraph>
      <Styled.a href={`mailto:${contact.email}`}>
        Contact the developer
      </Styled.a>
      <Styled.a href={termsOfService}>Terms of Service</Styled.a>
    </div>
  )
}

const Index = () => {
  const paths = Object.keys(apiSpec.paths)
  const resourcesPaths = groupPaths(paths)
  const resources = Object.keys(resourcesPaths)
  const resourcesMetaInfo = arrayToObject({ list: apiSpec.tags, key: 'name' })

  return (
    <div sx={{ paddingY: 11 }}>
      <Center sx={{ maxWidth: 1200 }}>
        <ApiSpecHeading {...apiSpec.info} />
        <div>
          {resources.map(r => {
            return (
              <Resource
                key={r}
                name={r}
                description={resourcesMetaInfo[r].description}
              >
                {resourcesPaths[r].map(path => (
                  <ResourceEndPoint path={path} methods={apiSpec.paths[path]} />
                ))}
              </Resource>
            )
          })}
        </div>
      </Center>
    </div>
  )
}

export default Index
