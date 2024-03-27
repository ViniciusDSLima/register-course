import { HttpResponseType } from '../../../main/httpResponse/types';
import { AnyObjectSchema } from 'yup';
import { Request } from 'express';

export type ValidationRequestType = {
  query?: AnyObjectSchema;
  body?: AnyObjectSchema;
  params?: AnyObjectSchema;
}

export type WebControllerType = {
  handle(request: Request): Promise<HttpResponseType>
  validationRequest(): ValidationRequestType;
}
