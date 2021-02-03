import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

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
    expect(htppResponse.body).toEqual(new MissingParamError('name'))
  })

  describe('Shoulds return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        password_confirmation: 'any_password_confirmation'
      }
    }
    const htppResponse = sut.handle(httpRequest)
    expect(htppResponse.statusCode).toBe(400)
    expect(htppResponse.body).toEqual(new MissingParamError('email'))
  })

  describe('Shoulds return 400 if no password is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password_confirmation: 'any_password_confirmation'
      }
    }
    const htppResponse = sut.handle(httpRequest)
    expect(htppResponse.statusCode).toBe(400)
    expect(htppResponse.body).toEqual(new MissingParamError('password'))
  })

  describe('Shoulds return 400 if no password_confirmation is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password'
      }
    }
    const htppResponse = sut.handle(httpRequest)
    expect(htppResponse.statusCode).toBe(400)
    expect(htppResponse.body).toEqual(new MissingParamError('password_confirmation'))
  })
})
