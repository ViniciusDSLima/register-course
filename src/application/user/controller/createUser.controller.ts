import { Request } from 'express';
import { ValidationRequestType, WebControllerType } from '../../../infra/webController/types';
import { HttpResponseType } from '../../../main/httpResponse/types';
import { CreateUserService } from '../service/createUser.service';
import { UserRepository } from '../repository/implementations/user.repository';
import { HttpResponse } from '../../../main/httpResponse';
import { object, string } from 'yup';

export type userRegisterRequestType = {
  name: string;
  email: string;
  password: string;
}

export class CreateUserController implements WebControllerType {
  public async handle(request: Request): Promise<HttpResponseType> {
    const data = request.body as userRegisterRequestType;

    const createUserServiceResponse = await
      new CreateUserService(new UserRepository()).execute(data);

    return HttpResponse.created(createUserServiceResponse);
  }

  public validationRequest(): ValidationRequestType {
    return {
      body: object({
        name: string().required(),
        email: string().email().required(),
        password: string().required(),
      }),
    };
  }

}
