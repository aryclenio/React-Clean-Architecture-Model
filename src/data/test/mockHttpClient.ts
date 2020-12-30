import {
  HttpPostClient,
  HttpPostParams,
} from 'data/protocols/http/httpPostClient';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  body?: Record<string, unknown>;

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
