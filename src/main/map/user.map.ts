import { UserMapType } from './type/userMap.type';
import { UserEntity, UserResponseType } from '../../domain/entity/user.entity';
import { UserModel } from '../../application/user/typeorm/user.model';
import { UserFactory } from '../../domain/factory/user.factory';

export const UserMap: UserMapType = {
  DomainToResponse(entity: UserEntity): UserResponseType {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      password: entity.password,
      resetPassword: entity.resetPassword,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
    };
  }, TypeormArrayToDomain(models: UserModel[]): UserEntity[] {
    throw new Error('Method not implemented');
  }, TypeormToDomain(model: UserModel): UserEntity {
    return UserFactory.create({ ...model });
  },
};
