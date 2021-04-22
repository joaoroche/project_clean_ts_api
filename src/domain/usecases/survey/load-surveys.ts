/* eslint-disable @typescript-eslint/method-signature-style */
import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveys {
  load (): Promise<SurveyModel[]>
}
