export interface SurveyResultModel {
  surveyId: string
  question: string
  answers: SurveyResultAnswerModel[]
  date: Date
}
export interface SurveyResultAnswerModel {
  image?: string
  answer: string
  count: number
  percent: number
}
