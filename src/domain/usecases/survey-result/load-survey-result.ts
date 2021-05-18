/* eslint-disable @typescript-eslint/method-signature-style */
import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  load (surveyId: string): Promise<SurveyResultModel>
}
