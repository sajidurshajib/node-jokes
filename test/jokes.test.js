const request = require('supertest')
const expect = require('chai').expect
const app = require('../src/app')

describe('GET /jokes', () => {
    it('Jokes get all test', (done) => {
        request(app)
            .get('/jokes')
            .expect(200)
            .then((res) => {
                const response = res.body

                // assertion
                expect(response).to.have.property('data')

                done()
            })
            .catch((err) => {
                throw err
            })
    })
})
