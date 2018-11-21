const { required, setNow } = require('feathers-hooks-common')

const escapeHtml = require('../../hooks/escape-html')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [required('author', 'comment', 'movie_id'), escapeHtml('author', 'comment'), setNow('created_at')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
