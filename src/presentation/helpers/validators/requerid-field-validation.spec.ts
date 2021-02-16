import { MissingParamError } from '../../errors'
import { RequeridFieldValidation } from './requerid-field-validation'

describe('RequeridField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = new RequeridFieldValidation('any_field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })

  test('should not return if validation succeeds', () => {
    const sut = new RequeridFieldValidation('any_field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })
})
