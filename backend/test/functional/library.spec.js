const { test, trait } = use('Test/Suite')('Library')

const Library = use('App/Models/Library')

/** @type {tyof import('@adonisjs/lucid/src/Lucid/Model')} */

trait('Test/ApiClient')

test('it should be able to create libraries', async ({ assert, client }) => {
  const response = await client
    .post('/libraries')
    .send({
      name: 'London Public Library',
      infos: [
        {
          phone: '2016-4527',
          email: 'biblioteca.itaquera@saopaulo.gov.br',
          social: '@bibliotecaitaquera'
        }
      ]
    })
    .end()

  response.assertStatus(200)
  assert.exists(response.body.id)
})

test('it should be able to list libraries', async ({ assert, client }) => {
  const library = await Library.create({
    name: 'London Public Library'
  })

  const response = await client.get('/libraries').end()

  response.assertStatus(200)
  assert.equal(response.body.data[0].name, library.name)
})

test('it should be able to show a single library', async ({ assert, client }) => {
  const library = await Library.create({
    name: 'London Public Library'
  })

  const response = await client.get('/libraries/1').end()

  response.assertStatus(200)
  assert.equal(response.body.name, library.name)
})

test('it should be able to update libraries', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  const response = await client
    .put('/libraries/1')
    .field('name', 'Biblioteca Pública do Porto')
    .end()

  response.assertStatus(200)
  assert.equal(response.body.name, 'Biblioteca Pública do Porto')
})

test('it should be able to delete a library', async ({ assert, client }) => {
  await Library.create({
    name: 'London Public Library'
  })

  const response = await client
    .delete('/libraries/1')
    .end()

  response.assertStatus(204)

  const checkLibrary = await Library.find('1')

  assert.isNull(checkLibrary)
})
