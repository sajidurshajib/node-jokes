const request = require('supertest')
const expect = require('chai').expect
const app = require('../src/app')

describe('GET /', () => {
    it('root test', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .then((res) => {
                const response = res.body
                // assertion
                expect(response).to.have.property('msg')

                done()
            })
            .catch((err) => {
                throw err
            })
    })
})
