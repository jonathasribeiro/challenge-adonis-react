const { test, trait } = use('Test/Suite')('Book')

/** @type {tyof import('@adonisjs/lucid/src/Lucid/Model')} */

const Library = use('App/Models/Library')
const Book = use('App/Models/Book')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('it should be able to create Books', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  const response = await client
    .post('/libraries/1/books')
    .send({
      title: 'As Armas da Persuasão',
      description: 'Como influenciar e não deixar de influenciar',
      author: 'Robert B. Cialdini, Ph.D.'
    })
    .end()

  response.assertStatus(200)
  assert.exists(response.body.id)
})

test('it should be able to list books', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  const book = await Book.create({
    library_id: 1,
    title: 'As Armas da Persuasão',
    description: 'Como influenciar e não deixar de influenciar',
    author: 'Robert B. Cialdini, Ph.D.'
  })

  const response = await client.get('/libraries/1/books').end()

  response.assertStatus(200)
  assert.equal(response.body[0].title, book.title)
})

test('it should be able to show a single book', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  const book = await Book.create({
    library_id: 1,
    title: 'As Armas da Persuasão',
    description: 'Como influenciar e não deixar de influenciar',
    author: 'Robert B. Cialdini, Ph.D.'
  })

  const response = await client.get('/libraries/1/books/1').end()

  response.assertStatus(200)
  assert.equal(response.body.title, book.title)
})

test('it should be able to update books', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  await Book.create({
    library_id: 1,
    title: 'As Armas da Persuasão',
    description: 'Como influenciar e não deixar de influenciar',
    author: 'Robert B. Cialdini, Ph.D.'
  })

  const response = await client
    .put('/libraries/1/books/1')
    .field('title', 'Mais esperto que o Diabo')
    .field('description', 'teste')
    .field('author', 'Napoleon Hill')
    .end()

  response.assertStatus(200)
  assert.equal(response.body.title, 'Mais esperto que o Diabo')
})

test('it should be able to delete a book', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  await Book.create({
    library_id: 1,
    title: 'As Armas da Persuasão',
    description: 'Como influenciar e não deixar de influenciar',
    author: 'Robert B. Cialdini, Ph.D.'
  })

  const response = await client
    .delete('/libraries/1/books/1')
    .end()

  response.assertStatus(204)

  const checkBook = await Book.find('1')

  assert.isNull(checkBook)
})
