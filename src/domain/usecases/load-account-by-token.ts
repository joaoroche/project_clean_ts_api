/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByToken {
  load (accessToken: string, role?: string): Promise<AccountModel>
}
