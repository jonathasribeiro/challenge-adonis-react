'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Library extends Model {
  infos () {
    return this.hasMany('App/Models/LibraryInfo')
  }

  books () {
    return this.hasMany('App/Models/Book')
  }
}

module.exports = Library
