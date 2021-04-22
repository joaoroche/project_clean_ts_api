/* eslint-disable @typescript-eslint/method-signature-style */
import { AddSurveyModel } from '@/domain/usecases/survey/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
