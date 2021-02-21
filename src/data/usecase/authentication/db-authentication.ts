import { LoadAccountByEmailRepository, AuthenticationModel, HashComparer, Encrypter, UpdatedAccessTokenRepository, Authentication } from './db-authentication-protocols'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer
  private readonly encrypter: Encrypter
  private readonly updatedAccessTokenRepository: UpdatedAccessTokenRepository

  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository, hashComparer: HashComparer, encrypter: Encrypter, updatedAccessTokenRepository: UpdatedAccessTokenRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.encrypter = encrypter
    this.updatedAccessTokenRepository = updatedAccessTokenRepository
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updatedAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return accessToken
      }
    }
    return null
  }
}
