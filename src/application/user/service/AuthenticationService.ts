import { AuthenticateError } from '../../../lib/errros';
import { UserRepositoryType } from '../repository/interfaces/userRepositoryType';
import * as jwt from 'jsonwebtoken';
import { UserResponseType } from '../../../domain/entity/user.entity';
import { UserMap } from '../../../main/map/user.map';
import { AuthenticationRequestType } from '../controller/Authentication.controller';


type AuthenticationResponseType = {
  token: string;
  user: UserResponseType
}

export class AuthenticationService {
  constructor(private _userRepository: UserRepositoryType) {
  }

  public async execute(data: AuthenticationRequestType): Promise<AuthenticationResponseType> {
    const userRepositoryResponse = await this._userRepository.getUserByEmail(data.email);

    if (!userRepositoryResponse) {
      throw new AuthenticateError('Invalid email or password.'
        , 'Usuario nao autenticado');
    }

    if (!userRepositoryResponse.checkIfUnencryptedPasswordIsValid(data.password)) {
      throw new AuthenticateError('Invalid email or password.'
        , 'Usuario nao autenticado');
    }

    const token = jwt.sign({ userId: userRepositoryResponse.id },
      process.env.SECRET_KEY,
      { subject: userRepositoryResponse.id, expiresIn: '1d' });

    const user = UserMap.DomainToResponse(userRepositoryResponse);

    return {
      token, user,
    };
  }
}
