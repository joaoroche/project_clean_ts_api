import { Controller, HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'
export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (htppRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(htppRequest.body)
    return await new Promise(resolve => resolve(null))
  }
}
