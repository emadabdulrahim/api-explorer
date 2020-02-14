import React from 'react'
/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui'
import { H6, Small } from './atomic'

/* 
  "responses": {
          "200": {
            "description": "successful operation",
            "schema": { "$ref": "#/definitions/Pet" }
          },
          "400": { "description": "Invalid ID supplied" },
          "404": { "description": "Pet not found" }
        },
 */

const ResponseData = ({ data }) => {
  return (
    <div
      sx={{
        backgroundColor: 'background.lightest',
        borderRadius: 'small',
        border: 'muted',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      {data ? (
        <Styled.pre>{JSON.stringify(data, null, 2)}</Styled.pre>
      ) : (
        <Small sx={{ color: 'text.caption' }}>
          Excute a query to see results.
        </Small>
      )}
    </div>
  )
}

const ResourceResponses = ({ responses, data }) => {
  const statusCodes = Object.keys(responses)

  return (
    <Grid
      columns="max-content 1fr"
      gap={7}
      sx={{ padding: 6, alignItems: 'start', maxWidth: 450 }}
    >
      {statusCodes.map(s => (
        <React.Fragment key={s}>
          <Small sx={{ fontFamily: 'mono' }}>{s}</Small>
          <Grid gap={4}>
            <Small sx={{ textTransform: 'capitalize' }}>
              {responses[s].description}
            </Small>
            {s == '200' && <ResponseData data={data} />}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}

export { ResourceResponses }
