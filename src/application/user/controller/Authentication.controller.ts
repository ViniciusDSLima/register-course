import { ValidationRequestType, WebControllerType } from '../../../infra/webController/types';
import { HttpResponseType } from '../../../main/httpResponse/types';
import { Request } from 'express';
import { AuthenticationService } from '../service/AuthenticationService';
import { UserRepository } from '../repository/implementations/user.repository';
import { HttpResponse } from '../../../main/httpResponse';
import { object, string } from 'yup';

export type AuthenticationRequestType = {
  email: string;
  password: string;
}

export class AuthenticationController implements WebControllerType {
  public async handle(request: Request): Promise<HttpResponseType> {
    const { data } = request.body as AuthenticationRequestType;

    const authenticationResponseService = await new AuthenticationService(new UserRepository()).execute(data);

    return HttpResponse.ok(authenticationResponseService);
  }

  public validationRequest(): ValidationRequestType {
    return {
      body: object({
        email: string().required(),
        password: string().required(),
      }),
    };
  }
}
