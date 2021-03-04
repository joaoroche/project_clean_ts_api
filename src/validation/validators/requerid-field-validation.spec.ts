import { MissingParamError } from '../../presentation/errors'
import { RequeridFieldValidation } from './requerid-field-validation'

const makeSut = (): RequeridFieldValidation => {
  return new RequeridFieldValidation('field')
}

describe('RequeridField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
