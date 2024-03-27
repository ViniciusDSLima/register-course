import { UserRepositoryInterface } from '../repository/interfaces/user.repository.interface';
import { UserResponseType } from '../../../domain/entity/user.entity';
import { UserMap } from '../../../main/map/user.map';
import { userRegisterRequestType } from '../controller/createUser.controller';
import { UserFactory } from '../../../domain/factory/user.factory';
import { generateUniqueId } from '../../../infra/utils/generateUniqueId';

export class CreateUserService {
  constructor(private _userRepositoryInterface: UserRepositoryInterface) {
  }

  public async execute(data: userRegisterRequestType): Promise<UserResponseType> {
    const userFactoryCreate = UserFactory.create({
      id: generateUniqueId(),
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const userRepositoryResponse = await this._userRepositoryInterface.create(userFactoryCreate);

    return UserMap.DomainToResponse(userRepositoryResponse);
  }
}
