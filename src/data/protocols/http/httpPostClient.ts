import { HttpResponse } from './httpResponse';

export type HttpPostParams = {
  url: string;
  body?: Record<string, unknown>;
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
