import { MissingParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols'

export class RequeridFieldValidation implements Validation {
  private readonly fildName: string

  constructor (fildName: string) {
    this.fildName = fildName
  }

  validate (input: any): Error {
    if (!input[this.fildName]) {
      return new MissingParamError(this.fildName)
    }
  }
}
