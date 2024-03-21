import { UserEntity } from '../../../../domain/entity/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.repository.interface';
import { Repository } from 'typeorm';
import { UserModel } from '../../typeorm/user.model';
import { AppDataSource } from '../../../../infra/database';
import { InternalServerError } from '../../../../lib/errros';

export class UserRepository implements UserRepositoryInterface {
  private ormRepository: Repository<UserModel>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(UserModel);
  }

  public async create(entity: UserEntity): Promise<UserEntity> {
    try {

      const userModelRepostoryResponse = this.ormRepository.create({
        id: entity.Id,
        name: entity.Name,
        email: entity.Email,
      });

      await this.ormRepository.save(userModelRepostoryResponse);

      return entity;
    } catch (error) {
      throw new InternalServerError(
        'Error while create user: (Repository)',
        'Erro ao criar o usuario');
    }
  }

}
