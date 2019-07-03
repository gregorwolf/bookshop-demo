const request = require('supertest')
const app = require('express')()
const cds = require('@sap/cds')


const logLevel = 'error' //'info'

beforeAll(async () => {
  await cds.connect({kind: 'sqlite', database: ':memory:'})
  const csn = await cds.load('srv')
  await cds.deploy(csn)
  await cds.serve('all', {logLevel}).in(app)
})

afterAll(async () => {
  await cds.disconnect()
})

describe('Basic CRUD', () => {
  beforeEach(async () => {
    await Promise.all([
      cds.run(DELETE.from('my.bookshop.Books')),
      cds.run(DELETE.from('my.bookshop.Authors'))
    ])
    await Promise.all([
      cds.run(INSERT.into('my.bookshop.Books').columns(
        'ID', 'title', 'author_id', 'stock'
      ).rows(
        [201, 'Wuthering Heights', 101, 12],
        [207, 'Jane Eyre', 107, 11],
        [251, 'The Raven', 150, 333],
        [252, 'Eleonora', 150, 555],
        [271, 'Catweazle', 170, 222]
      )),
      cds.run(INSERT.into('my.bookshop.Authors').entries(
        {ID: 101, name: 'Emily Brontë'},
        {ID: 107, name: 'Charlote Brontë'},
        {ID: 150, name: 'Edgar Allen Poe'},
        {ID: 170, name: 'Richard Carpenter'}
      ))
    ])
  })

  test('/catalog', () => {
    return request(app)
      .get('/catalog')
      .auth('alice', '')
      .expect('Content-Type', /^application\/json/)
      .expect(200)
      .then(response => {
        expect(response.body.value).toContainEqual({"name": "Authors", "url": "Authors"})
        expect(response.body.value).toContainEqual({"name": "Books", "url": "Books"})
        expect(response.body.value).toContainEqual({"name": "Currencies", "url": "Currencies"})
        expect(response.body.value).toContainEqual({"name": "Orders", "url": "Orders"})
      })
  })

  test('/catalog/$metadata', () => {
    return request(app)
      .get('/catalog/$metadata')
      .auth('alice', '')
      .expect('Content-Type', /xml/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatch(/version="4\.0"/i)
      })
  })

  test('READ Books', () => {
    return request(app)
      .get('/catalog/Books?$count=true&$top=1&$skip=1&$filter=stock ge 1&$orderby=ID&$select=ID,stock,title')
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Books(ID,stock,title)',
          '@odata.count': 5,
          'value': [
            {
              "ID": 207,
              "stock": 11,
              "title": "Jane Eyre"
            }
          ]
        })
      })
  })

  test('READ Authors', () => {
    return request(app)
      .get('/catalog/Authors?$count=true&$top=1&$skip=1&$filter=ID ge 1&$orderby=ID&$select=ID,name')
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Authors(ID,name)',
          '@odata.count': 4,
          'value': [{'ID': 107, 'name': 'Charlote Brontë'}]
        })
      })
  })

  test('Expand Authors', () => {
    return request(app)
      .get('/catalog/Authors?$expand=books')
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Authors(books())',
          'value': [
            {
              'ID': 101,
              'books': [{'ID': 201, 'author_ID': 101, 'stock': 12, 'title': 'Wuthering Heights'}],
              'name': 'Emily Brontë'
            }, {
              'ID': 107,
              'books': [{'ID': 207, 'author_ID': 107, 'stock': 11, 'title': 'Jane Eyre'}],
              'name': 'Charlote Brontë'
            }, {
              'ID': 150,
              'books': [
                {'ID': 251, 'author_ID': 150, 'stock': 333, 'title': 'The Raven'},
                {'ID': 252, 'author_ID': 150, 'stock': 555, 'title': 'Eleonora'}
              ],
              'name': 'Edgar Allen Poe'
            }, {
              'ID': 170,
              'books': [{'ID': 271, 'author_ID': 170, 'stock': 222, 'title': 'Catweazle'}],
              'name': 'Richard Carpenter'
            }
          ]
        })
      })
  })

  test('CREATE Authors', () => {
    return request(app)
      .post('/admin/Authors')
      .send({ID: 171, name: 'Jon Doe'})
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Authors/$entity',
          'ID': 171,
          'name': 'Jon Doe'
        })

        return request(app)
          .get('/catalog/Authors(171)')
          .auth('alice', '')
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(response => {
            expect(response.body).toMatchObject({
              '@odata.context': '$metadata#Authors/$entity',
              'ID': 171,
              'name': 'Jon Doe'
            })
          })
      })
  })

  test('Read Authors(170)', () => {
    return request(app)
      .get('/catalog/Authors(170)')
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Authors/$entity',
          'ID': 170,
          'name': 'Richard Carpenter'
        })
      })
  })

  test('UPDATE', () => {
    return request(app)
      .put('/admin/Authors(170)')
      .send({
        ID: 170,
        name: 'Jon Doe 2'
      })
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Authors/$entity',
          'ID': 170,
          'name': 'Jon Doe 2'
        })

        return request(app)
          .get('/catalog/Authors(170)')
          .auth('alice', '')
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(response => {
            expect(response.body).toMatchObject({
              '@odata.context': '$metadata#Authors/$entity',
              'ID': 170,
              'name': 'Jon Doe 2'
            })
          })
      })
  })

  test('DELETE', () => {
    return request(app)
      .delete('/admin/Authors(170)')
      .auth('alice', '')
      .expect(204)
      .then(response => {
        expect(response.text).toBe('')

        return request(app)
          .get('/catalog/Authors(170)')
          .auth('alice', '')
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404)
          .then(response => {
            expect(response.body).toMatchObject({
              'error': {
                'code': '404',
                'message': 'Not Found'
              }
            })
          })
      })
  })

  xtest('CREATE Orders', () => {
    return request(app)
      .post('/catalog/Orders')
      .send({
        'ID': 'c13d3eec-942e-470d-97b3-e03322136636'
      })
      .auth('alice', '')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(response => {
        expect(response.body).toMatchObject({
          '@odata.context': '$metadata#Orders/$entity',
          'ID': 'c13d3eec-942e-470d-97b3-e03322136636'
        })

      return request(app)
        .post('/catalog/Orders')
        .send({
          'ID': 'a13d3eec-942e-470d-97b3-e03322136636',
          'book_ID': 201,
          'amount': 10000
        })
        .auth('alice', '')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(409)
        .then(response => {
          expect(response.body).toEqual({
            'error': {
              'code': '409',
              'message': 'Sold out, sorry'
            }
          })
        })
      })
  })
})
