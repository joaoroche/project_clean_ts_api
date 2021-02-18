import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  private readonly fildName: string
  private readonly fieldToCompareName: string

  constructor (fildName: string, fielToCompareName: string) {
    this.fildName = fildName
    this.fieldToCompareName = fielToCompareName
  }

  validate (input: any): Error {
    if (input[this.fildName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
