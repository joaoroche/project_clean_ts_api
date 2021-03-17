/* eslint-disable @typescript-eslint/no-floating-promises */
import { LoadSurveysController } from './load-surveys-controller'
import { SurveyModel, LoadSurveys } from './load-surveys-controller-protocols'
import MockDate from 'mockdate'

const makeFakeSurveys = (): SurveyModel[] => {
  return [{
    id: 'any_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  }, {
    id: 'other_id',
    question: 'other_id_question',
    answers: [{
      image: 'other_id_image',
      answer: 'other_id_answer'
    }],
    date: new Date()
  }]
}

describe('', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call LoadSurveys', async () => {
    class LoadSurveysStub implements LoadSurveys {
      async load (): Promise<SurveyModel[]> {
        return await new Promise(resolve => resolve(makeFakeSurveys()))
      }
    }
    const loadSurveysStub = new LoadSurveysStub()
    const loadSpy = jest.spyOn(loadSurveysStub, 'load')
    const sut = new LoadSurveysController(loadSurveysStub)
    sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })
})
