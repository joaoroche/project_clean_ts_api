/* eslint-disable @typescript-eslint/method-signature-style */
export interface UpdatedAccessTokenRepository {
  update (id: string, token: string): Promise<void>
}
