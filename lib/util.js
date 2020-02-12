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
