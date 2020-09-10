'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LibrarySchema extends Schema {
  up () {
    this.create('libraries', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('libraries')
  }
}

module.exports = LibrarySchema
