const { required } = require('feathers-hooks-common')
const { populateMissingFieldsFromOmdb } = require('./hooks')

const escapeHtml = require('../../hooks/escape-html')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      required('title'),
      escapeHtml('title', 'director', 'writer', 'actors', 'plot', 'poster'),
      populateMissingFieldsFromOmdb
    ],
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
