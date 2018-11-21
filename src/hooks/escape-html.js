const R = require('ramda')
const escapeHtml = require('escape-html')

// eslint-disable-next-line no-unused-vars
module.exports = function (...options) {
  return async context => {
    context.data = R.compose(
      R.mergeAll,
      R.juxt([
        R.omit(options),
        R.compose(
          R.map(escapeHtml),
          R.pick(options)
        )
      ]),
      R.prop('data')
    )(context)

    return context
  }
}
