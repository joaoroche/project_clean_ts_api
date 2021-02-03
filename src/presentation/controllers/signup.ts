import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (htppRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!htppRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}