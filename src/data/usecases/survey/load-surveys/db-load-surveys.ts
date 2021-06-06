import { LoadSurveysRepository, LoadSurveys } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (id: string): Promise<LoadSurveys.Result[]> {
    return this.loadSurveysRepository.loadAll(id)
  }
}
