'use strict'

const Database = use('Database')
const Library = use('App/Models/Library')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with libraries
 */
class LibraryController {
  async index ({ request }) {
    const { page } = request.get()

    const library = await Library.query()
      .with('infos')
      .with('books')
      .orderBy('id', 'cresc')
      .paginate(page)

    return library
  }

  async store ({ request }) {
    const data = request.only(['name'])
    const infos = request.input('infos')

    const trx = await Database.beginTransaction()

    const library = await Library.create(data, trx)

    await library.infos().createMany(infos, trx)

    await trx.commit()

    return library
  }

  async show ({ params }) {
    const library = await Library.findOrFail(params.id)

    await library.load('books')

    return library
  }

  async update ({ params, request }) {
    const library = await Library.findOrFail(params.id)
    const data = request.only(['name'])

    library.merge(data)

    await library.save()

    return library
  }

  async destroy ({ params }) {
    const library = await Library.findOrFail(params.id)

    await library.delete()
  }
}

module.exports = LibraryController
