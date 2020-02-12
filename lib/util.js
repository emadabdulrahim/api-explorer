export const groupPaths = paths => {
  let result = {}

  for (let p of paths) {
    const resource = p.split('/')[1]

    if (!result[resource]) {
      result[resource] = []
    }

    result[resource].push(p)
  }

  return result
}

export const arrayToObject = ({ list, key }) => {
  let result = {}

  for (let o of list) {
    result[o[key]] = o
  }

  return result
}

export const getColorForVerb = verb => {
  switch (verb.toLowerCase()) {
    case 'get':
      return {
        color: 'green.dark',
        background: 'green.light',
      }
    case 'post':
      return {
        color: 'blue.dark',
        background: 'blue.light',
      }
    case 'delete':
      return {
        color: 'red.dark',
        background: 'red.light',
      }
    case 'put':
      return {
        color: 'orange.dark',
        background: 'orange.light',
      }
  }
}
