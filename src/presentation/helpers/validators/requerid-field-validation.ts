import { MissingParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

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
