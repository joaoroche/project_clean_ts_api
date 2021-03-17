import { SurveyAnswerModel } from '../models/survey'

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}

export interface AddSurvey {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add (surveyData: AddSurveyModel): Promise<void>
}
