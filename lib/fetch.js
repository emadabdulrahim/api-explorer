class Fetch {
  static _instance
  _baseURL

  constructor() {}

  static getInstance() {
    if (!Fetch._instance) {
      Fetch._instance = new Fetch()
    }

    return Fetch._instance
  }

  set baseURL(url) {
    this._baseURL = url
  }

  fetchData = async ({ path, method, body }) => {
    try {
      const result = await fetch(`${this._baseURL}${path}`, {
        // hardcoded
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method,
        ...(method !== 'get' && { body }),
      })

      return await result.json()
    } catch (err) {
      console.error(err)
    }
  }
}

export default Fetch
