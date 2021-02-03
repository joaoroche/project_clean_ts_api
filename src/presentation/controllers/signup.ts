import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controllers'
export class SignUpController implements Controller {
  handle (htppRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'password_confirmation']
    for (const field of requiredFields) {
      if (!htppRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
