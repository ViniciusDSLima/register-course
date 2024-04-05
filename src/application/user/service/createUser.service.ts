import { UserRepositoryType } from '../repository/interfaces/userRepositoryType';
import { UserResponseType } from '../../../domain/entity/user.entity';
import { UserMap } from '../../../main/map/user.map';
import { userRegisterRequestType } from '../controller/createUser.controller';
import { UserFactory } from '../../../domain/factory/user.factory';
import { generateUniqueId } from '../../../infra/utils/generateUniqueId';
import { AlreadyExist } from '../../../lib/errros';

export class CreateUserService {
  constructor(private _userRepository: UserRepositoryType) {
  }

  public async execute(data: userRegisterRequestType): Promise<UserResponseType> {
    const getUserRepositoryResponse = await this._userRepository.getUserByEmail(data.email);

    if (getUserRepositoryResponse) {
      throw new AlreadyExist('User already exists',
        'usuario ja existente');
    }

    const userCreate = UserFactory.create({
      id: generateUniqueId(),
      name: data.name,
      email: data.email,
      password: data.password,
      resetPassword: false,
    });

    userCreate.hashPassword();

    const userRepositoryResponse = await this._userRepository.create(userCreate);

    return UserMap.DomainToResponse(userRepositoryResponse);
  }
}
