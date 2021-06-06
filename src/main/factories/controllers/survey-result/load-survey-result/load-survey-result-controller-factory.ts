import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { Controller } from '@/presentation/protocols'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result/load-survey-result/load-survey-result-controller'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey/survey-result/load-survey/db-load-survey-result-factory'
import { makeDbCheckSurveyById } from '@/main/factories/usecases/survey/check-survey-by-id/db-load-survey-by-id-factory'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(makeDbCheckSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
