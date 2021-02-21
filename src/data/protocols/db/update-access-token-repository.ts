/* eslint-disable @typescript-eslint/method-signature-style */
export interface UpdatedAccessTokenRepository {
  updateAccessToken (id: string, token: string): Promise<void>
}
