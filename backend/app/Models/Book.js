'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  library () {
    return this.belongsTo('App/Models/Library')
  }
}

module.exports = Book
