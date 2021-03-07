import { ValidationComposite, RequeridFieldValidation } from '../../../../validation/validators'
import { Validation } from '../../../../presentation/protocols/validation'

export const makeAddSurveyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['question', 'answers']) {
    validations.push(new RequeridFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
