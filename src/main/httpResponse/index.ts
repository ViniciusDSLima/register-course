import { HttpResponseType } from './types';

export class HttpResponse {
  public static ok(data?: any): HttpResponseType {
    return {
      statusCode: 200,
      data,
    };
  }

  public static created(data?: any): HttpResponseType {
    return {
      statusCode: 201,
      data,
    };
  }

  public static no_content(): HttpResponseType {
    return {
      statusCode: 204,
    };
  }
}
