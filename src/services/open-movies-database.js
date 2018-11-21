const axios = require('axios')

class OpenMoviesDatabase {
  async get (title, params) {
    try {
      return (await axios.get(
        `http://www.omdbapi.com`,
        {
          params: {
            t: title,
            apikey: process.env.OMDB_API_KEY
          }
        }
      )).data
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = OpenMoviesDatabase
