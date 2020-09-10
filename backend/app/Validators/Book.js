'use strict'

const Antl = use('Antl')

class Book {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      author: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Book
