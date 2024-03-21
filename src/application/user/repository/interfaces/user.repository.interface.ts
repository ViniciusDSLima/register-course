import { UserEntity } from '../../../../domain/entity/user.entity';

export interface UserRepositoryInterface {

  create(data: UserEntity): Promise<UserEntity>;
}
