
export const unauthorized = {
  description: 'Credencias Invalidas',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
