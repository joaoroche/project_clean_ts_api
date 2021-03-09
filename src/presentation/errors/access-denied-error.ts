/* eslint-disable @typescript-eslint/quotes */
export class AccessDeniedError extends Error {
  constructor () {
    super(`Access denied`)
    this.name = 'AccessDeniedError'
  }
}
