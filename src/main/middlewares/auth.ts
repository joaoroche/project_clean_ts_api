import { adaptMiddleware } from '../adapters/experess-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middleware/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddleware())
