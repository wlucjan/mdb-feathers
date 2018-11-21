const OpenMoviesDatabase = require('./open-movies-database')
const moviesService = require('./movies/movies.service')
const commentsService = require('./comments/comments.service')

module.exports = app => {
  app.use('omdb', new OpenMoviesDatabase())
  moviesService(app)
  commentsService(app)
}
