// Initializes the `movies` service on path `/movies`
const createService = require('feathers-knex')
const createModel = require('../../models/movies.model')
const hooks = require('./movies.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'movies',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/movies', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('movies')

  service.hooks(hooks)
}
