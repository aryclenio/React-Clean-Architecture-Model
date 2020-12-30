import { HttpPostClient } from '@/data/protocols/http/httpPostClient';
import { HttpStatusCode } from '@/data/protocols/http/httpResponse';
import { InvalidCredentialsError } from '@/domain/errors/invalidCredentialsError';
import { UnexpectedError } from '@/domain/errors/unexpectedError';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      default:
        throw new UnexpectedError();
    }
  }
}
