import { UserEntity } from '../entity/user.entity';

export type UserFactoryRequestType = {
  id: string;
  name: string;
  email: string;
  password: string;
  resetPassword: boolean,
  created_at?: Date;
  updated_at?: Date;
}

export class UserFactory {
  public static create(
    data: UserFactoryRequestType,
  ): UserEntity {
    return new UserEntity({
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      resetPassword: false,
      created_at: data.created_at ?? new Date(),
      updated_at: data.updated_at ?? new Date(),
    });
  }
}
