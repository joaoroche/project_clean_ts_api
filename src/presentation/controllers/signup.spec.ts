import { SignUpController } from './signup'

test('SignUp Controller', () => {
  describe('Shoulds return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        password_confirmation: 'any_password_confirmation'
      }
    }
    const htppResponse = sut.handle(httpRequest)
    expect(htppResponse.statusCode).toBe(400)
    expect(htppResponse.body).toEqual(new Error('Missing param: name'))
  })
})
