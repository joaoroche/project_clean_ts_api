/* eslint-disable @typescript-eslint/method-signature-style */

import { AddSurveyModel } from '../../../../domain/usecases/add-survey'

export interface AddSurveyRepository {
  add (survey: AddSurveyModel): Promise<void>
}
