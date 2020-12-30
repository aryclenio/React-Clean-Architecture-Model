import { HttpPostClient } from '@/data/protocols/http/httpPostClient';
import { HttpStatusCode } from '@/data/protocols/http/httpResponse';
import { InvalidCredentialsError } from '@/domain/errors/invalidCredentialsError';
import { UnexpectedError } from '@/domain/errors/unexpectedError';
import { AccountModel } from '@/domain/models/accountModel';
import {
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases/authentication';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >,
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      default:
        throw new UnexpectedError();
    }
  }
}
