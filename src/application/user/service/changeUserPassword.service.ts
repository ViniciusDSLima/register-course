import { UserRepositoryType } from '../repository/interfaces/userRepositoryType';
import { AuthenticateError, BadRequestError, NotFoundError } from '../../../lib/errros';
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

    if (data.oldPassword === data.newPassword) {
      throw new BadRequestError('both Password is Equals',
        'Senha ja cadastrada.');
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
