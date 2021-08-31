export class ValidationError extends Error {
  public status = 400
  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ValidationError'
    this.status = status || this.status
  }
}
