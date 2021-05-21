import { AuthenticationModel } from '@/domain/models/authentication'

/* eslint-disable @typescript-eslint/method-signature-style */
export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth (authentication: AuthenticationParams): Promise<AuthenticationModel>
}
