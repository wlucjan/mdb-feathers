
exports.up = (knex, Promise) => knex.schema
  .hasTable('comments')
  .then(exists => {
    if (!exists) {
      return knex.schema.createTable('comments', table => {
        table.increments('id')
        table.string('author').notNullable()
        table.text('comment')
        table.datetime('created_at')

        table.integer('movie_id').unsigned()
        table.foreign('movie_id').references('id').on('movies').onDelete('CASCADE')

        table.index('movie_id')
      })
    }
  })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('comments')
