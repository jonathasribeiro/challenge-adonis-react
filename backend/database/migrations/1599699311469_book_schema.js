'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table
        .integer('library_id')
        .unsigned()
        .references('id')
        .inTable('libraries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.string('title').notNullable()
      table.text('description')
      table.string('author')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
