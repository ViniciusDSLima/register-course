import { ValidationRequestType, WebControllerType } from '../../../infra/webController/types';
import { HttpResponseType } from '../../../main/httpResponse/types';
import { Request } from 'express';
import { ChangeUserPasswordService } from '../service/changeUserPassword.service';
import { UserRepository } from '../repository/implementations/user.repository';
import { HttpResponse } from '../../../main/httpResponse';
import { object, string } from 'yup';

export type ChangePasswordRequestType = {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export class ChangeUserPasswordController implements WebControllerType {
  public async handle(request: Request): Promise<HttpResponseType> {
    const { email, oldPassword, newPassword } = request.body as ChangePasswordRequestType;

    const changePasswordService = new ChangeUserPasswordService(new UserRepository);

    await changePasswordService.execute({
      email,
      oldPassword,
      newPassword,
    });

    return HttpResponse.no_content();
  }

  public validationRequest(): ValidationRequestType {
    return {
      body: object({
        email: string().required().email(),
        oldPassword: string().required(),
        newPassword: string().required(),
      }),
    };
  }

}
