/* eslint-disable @typescript-eslint/method-signature-style */
export interface Decrypter {
  decrypt (token: string): Promise<string>
}
