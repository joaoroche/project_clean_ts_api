/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '../../../../domain/models/account'

export interface LoadAccountByTokenRepository {
  loadByToken (token: string, roke?: string): Promise<AccountModel>
}
