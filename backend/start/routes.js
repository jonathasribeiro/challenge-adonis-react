'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('libraries', 'LibraryController')
  .apiOnly()
  .validator(new Map([[['libraries.store'], ['Library']]]))

Route.resource('libraries.books', 'BookController')
  .apiOnly()
  .validator(new Map([[['libraries.books.store'], ['Book']]]))
