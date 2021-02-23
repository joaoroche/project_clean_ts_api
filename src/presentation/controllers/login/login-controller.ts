import { Controller ,Authentication, HttpRequest, HttpResponse, Validation } from './login-controller-protocols'
import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/http-helper'
export class LoginControlller implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation) {}

  async handle (htppRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(htppRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = htppRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
