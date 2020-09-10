'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LibraryInfoSchema extends Schema {
  up () {
    this.create('library_infos', (table) => {
      table.increments()
      table
        .integer('library_id')
        .unsigned()
        .references('id')
        .inTable('libraries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.string('phone')
      table.string('email')
      table.string('social')
      table.timestamps()
    })
  }

  down () {
    this.drop('library_infos')
  }
}

module.exports = LibraryInfoSchema
