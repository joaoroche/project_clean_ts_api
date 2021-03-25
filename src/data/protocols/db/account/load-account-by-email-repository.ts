/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByEmailRepository {
  loadByEmail (email: string): Promise<AccountModel>
}
