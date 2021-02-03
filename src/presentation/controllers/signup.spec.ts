import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error copy'
import { EmailValidator } from '../protocols/email-validator'

interface SutTypes {
  sut: SignUpController
  emailValidatorStub: EmailValidator
}

const makeSut = (): SutTypes => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  const emailValidatorStub = new EmailValidatorStub()
  const sut = new SignUpController(emailValidatorStub)
  return {
    sut,
    emailValidatorStub
  }
}

describe('SignUp Controller', () => {
  test('Shoulds return 400 if no name is provided', () => {
    const { sut } = makeSut()
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

  test('Shoulds return 400 if no email is provided', () => {
    const { sut } = makeSut()
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

  test('Shoulds return 400 if no password is provided', () => {
    const { sut } = makeSut()
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

  test('Shoulds return 400 if no password_confirmation is provided', () => {
    const { sut } = makeSut()
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

  test('Shoulds return 400 if an invalidemail is provided', () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'invalid_email@email.com',
        password: 'any_password',
        password_confirmation: 'any_password_confirmation'
      }
    }
    const htppResponse = sut.handle(httpRequest)
    expect(htppResponse.statusCode).toBe(400)
    expect(htppResponse.body).toEqual(new InvalidParamError('email'))
  })

  test('Shoulds call EmailValidator with correct email', () => {
    const { sut, emailValidatorStub } = makeSut()
    const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid')
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password',
        password_confirmation: 'any_password_confirmation'
      }
    }
    sut.handle(httpRequest)
    expect(isValidSpy).toHaveBeenCalledWith('any_email@email.com')
  })
})
