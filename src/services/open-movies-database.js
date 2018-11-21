const axios = require('axios')
const logger = require('../logger')

const isValidResponse = data => data.Response === 'True'

class OpenMoviesDatabase {
  async get (title, params) {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com`,
        {
          params: {
            t: title,
            apikey: process.env.OMDB_API_KEY
          }
        }
      )

      return isValidResponse(data) ? data : {}
    } catch (err) {
      logger.info(err)
    }
  }
}

module.exports = OpenMoviesDatabase
