const R = require('ramda')
const logger = require('../../../logger')

const pickRelevantMovieData = R.applySpec({
  title: R.prop('Title'),
  director: R.prop('Director'),
  writer: R.prop('Writer'),
  actors: R.prop('Actors'),
  plot: R.prop('Plot'),
  poster: R.prop('Poster'),
  imdbRating: R.prop('imdbRating')
})

module.exports = async context => {
  const { app, data } = context

  try {
    const omdbMovieData = await app.services.omdb.get(data.title)

    context.data = R.compose(
      R.mergeAll,
      R.juxt([
        pickRelevantMovieData,
        R.always(data)
      ])
    )(omdbMovieData)
  } catch (err) {
    logger.info(err)
  }

  return context
}
