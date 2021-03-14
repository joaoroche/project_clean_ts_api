/* eslint-disable @typescript-eslint/method-signature-style */
export interface Decrypter {
  decrypt (value: string): Promise<string>
}
