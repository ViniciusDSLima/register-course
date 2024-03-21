import { BaseMapType } from '../../../application/@shared/maps/baseMaps.type';
import { UserModel } from '../../../application/user/typeorm/user.model';
import { UserEntity, UserResponseType } from '../../../domain/entity/user.entity';

export type UserMapType = BaseMapType<UserEntity, UserModel, UserResponseType>
