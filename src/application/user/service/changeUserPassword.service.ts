import { UserRepositoryType } from '../repository/interfaces/userRepositoryType';
import { AuthenticateError, NotFoundError } from '../../../lib/errros';
import { ChangePasswordRequestType } from '../controller/changeUserPassword.controller';


export class ChangeUserPasswordService {
  constructor(private _userRepository: UserRepositoryType) {
  }

  public async execute(data: ChangePasswordRequestType): Promise<void> {

    const user = await this._userRepository.getUserByEmail(data.email);

    if (!user) {
      throw new NotFoundError('User not found',
        'Usuario nao encontrado na base de dados.');
    }

    if (!user.checkIfUnencryptedPasswordIsValid(data.oldPassword)) {
      throw new AuthenticateError('User not autenticated',
        'Usuario nao autorizado');
    }

    user.changePassword(data.newPassword);

    user.changeResetPassword();

    await this._userRepository.update(user);
  }
}
