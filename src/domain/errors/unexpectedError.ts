export class UnexpectedError extends Error {
  constructor() {
    super('Algo deu errado. Tente novamente');
    this.name = 'UnexpectedError';
  }
}
