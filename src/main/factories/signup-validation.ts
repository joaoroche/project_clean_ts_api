import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { RequeridFieldValidation } from '../../presentation/helpers/validators/requerid-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequeridFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
