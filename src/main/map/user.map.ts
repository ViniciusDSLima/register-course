import { UserMapType } from './type/userMap.type';
import { UserEntity, UserResponseType } from '../../domain/entity/user.entity';
import { UserModel } from '../../application/user/typeorm/user.model';

export const UserMap: UserMapType = {
  DomainToResponse(entity: UserEntity): UserResponseType {
    throw new Error('Method not implemented');
  }, TypeormArrayToDomain(models: UserModel[]): UserEntity[] {
    throw new Error('Method not implemented');
  }, TypeormToDomain(model: UserModel): UserEntity {
    throw new Error('Method not implemented');
  },
};
