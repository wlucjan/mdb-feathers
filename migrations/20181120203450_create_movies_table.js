
exports.up = (knex, Promise) => knex.schema
  .hasTable('movies')
  .then(exists => {
    if (!exists) {
      return knex.schema.createTable('movies', table => {
        table.increments('id')
        table.string('title').notNullable().unique()
        table.string('poster')
        table.string('director')
        table.string('writer')
        table.text('actors')
        table.text('plot')
        table.decimal('imdbRating')
      })
    }
  })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('movies')
