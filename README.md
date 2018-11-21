# mdb-feathers

> Basic movie database built on feathersjs

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4, 5.

1. Make sure you have [NodeJS](https://nodejs.org/) and [yarn](https://www.npmjs.com/) installed.
2. Copy `.env.example` to `.env` and add missing variable values
    - OMDB_API_KEY
    - DB_USERNAME
    - DB_PASSWORD
3. Install your dependencies

    ```
    cd path/to/mdb-feathers; yarn
    ```

4. Start your app

    ```
    docker-compose up --build -d
    ```
5. Migrate db schema
    ```
    docker-compose exec api ./node_modules/.bin/knex migrate:latest
    ```
5. API will be available at `localhost:8080`

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## API docs
An export of Postman collection documenting API endpoints can be found in `doc/` directory.

## Demo
Live demo of the API is available at [Heroku](https://mdb-feathers.herokuapp.com)

## Changelog

__0.1.6__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).

[![CircleCI](https://circleci.com/gh/wlucjan/mdb-feathers/tree/develop.svg?style=svg)](https://circleci.com/gh/wlucjan/mdb-feathers/tree/develop)
