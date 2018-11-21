/* eslint-disable no-console */
module.exports = function (app) {
  const db = app.get('knexClient')

  return db
}
