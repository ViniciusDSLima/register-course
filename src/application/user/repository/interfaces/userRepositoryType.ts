import { UserEntity } from '../../../../domain/entity/user.entity';

export type UserRepositoryType = {

  update(user: UserEntity): Promise<undefined>;

  create(data: UserEntity): Promise<UserEntity>;

  getUserByEmail(email: string): Promise<UserEntity | undefined>;

  getById(id: string): Promise<UserEntity>;
}
