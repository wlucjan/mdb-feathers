const R = require('ramda')

const pickRelevantMovieData = R.compose(
  R.zipObj([
    'title',
    'director',
    'writer',
    'actors',
    'plot',
    'poster',
    'imdbRating'
  ]),
  R.values,
  R.pick([
    'Title',
    'Director',
    'Writer',
    'Actors',
    'Plot',
    'Poster',
    'imdbRating'
  ])
)

module.exports = async context => {
  let omdbMovieData = {}
  const { app, data } = context

  try {
    omdbMovieData = await app.services.omdb.get(data.title)
  } catch (err) {
    console.log(err)
  }

  context.data = R.compose(
    R.mergeAll,
    R.juxt([
      pickRelevantMovieData,
      R.always(data)
    ])
  )(omdbMovieData)

  return context
}
