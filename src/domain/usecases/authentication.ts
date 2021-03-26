/* eslint-disable @typescript-eslint/method-signature-style */
export type AuthenticationModel = {
  email: string
  password: string
}

export interface Authentication {
  auth (authentication: AuthenticationModel): Promise<string>
}
