import { SurveyResultModel } from '@/domain/models/survey-result'

/* eslint-disable @typescript-eslint/method-signature-style */
export interface SaveSurveyResultParams {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}
