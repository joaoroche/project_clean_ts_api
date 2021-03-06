import { AddSurvey, Controller, HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'
import { badRequest, serverError } from '../../../helpers/http/http-helper'
export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { question, answers } = await httpRequest.body
      await this.addSurvey.add({
        question,
        answers
      })
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
