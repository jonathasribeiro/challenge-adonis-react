'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Book = use('App/Models/Book')

class BookController {
  async index ({ params }) {
    const books = await Book.query()
      .where('library_id', params.libraries_id)
      .orderBy('id', 'cresc')
      .fetch()

    return books
  }

  async store ({ params, request }) {
    const data = request.only([
      'title',
      'description',
      'author'
    ])

    const book = Book.create({ ...data, library_id: params.libraries_id })

    return book
  }

  async show ({ params }) {
    const book = await Book.findOrFail(params.id)

    return book
  }

  async update ({ params, request }) {
    const book = await Book.findOrFail(params.id)
    const data = request.only([
      'title',
      'description',
      'author'
    ])

    book.merge(data)

    await book.save()

    return book
  }

  async destroy ({ params }) {
    const book = await Book.findOrFail(params.id)

    await book.delete()
  }
}

module.exports = BookController
