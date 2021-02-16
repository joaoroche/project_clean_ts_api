import { LoginControlller } from './login'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

describe('Login Controlller', () => {
  test('Should return 400 if email is provided', async () => {
    const sut = new LoginControlller()
    const httpRequest = {
      body: {
        password: 'any_passworld'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if password is provided', async () => {
    const sut = new LoginControlller()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
