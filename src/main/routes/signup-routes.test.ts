import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return and account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Joao Carlos',
        email: 'joaocarlos.roche@globo.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
