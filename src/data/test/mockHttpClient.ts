import {
  HttpPostClient,
  HttpPostParams,
} from '@/data/protocols/http/httpPostClient';
import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/httpResponse';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  body?: Record<string, unknown>;

  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
