/* eslint-disable @typescript-eslint/method-signature-style */
import { HttpRequest, HttpResponse } from './http'

export interface Middleware {
  handle (htppRequest: HttpRequest): Promise<HttpResponse>
}
