import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptograth/encrypter'
import { Decrypter } from '../../../data/protocols/criptograth/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  private readonly secret: string

  constructor (secret: string) {
    this.secret = secret
  }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }

  async decrypt (value: string): Promise<string> {
    await jwt.verify(value, this.secret)
    return null
  }
}
