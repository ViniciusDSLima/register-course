import { UserEntity } from '../../../../domain/entity/user.entity';
import { UserRepositoryType } from '../interfaces/userRepositoryType';
import { Repository } from 'typeorm';
import { UserModel } from '../../typeorm/user.model';
import { AppDataSource } from '../../../../infra/database';
import { InternalServerError } from '../../../../lib/errros';
import { UserMap } from '../../../../main/map/user.map';

export class UserRepository implements UserRepositoryType {
  private ormRepository: Repository<UserModel>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(UserModel);
  }

  public async create(entity: UserEntity): Promise<UserEntity> {
    try {
      const userModelRepostoryResponse = this.ormRepository.create({
        id: entity.id,
        name: entity.name,
        email: entity.email,
        password: entity.password,
        resetPassword: false,
      });

      await this.ormRepository.save(userModelRepostoryResponse);

      return entity;
    } catch (error) {
      throw new InternalServerError(
        'Error while create user: (Repository)',
        'Erro ao criar o usuario');
    }
  }

  public async getUserByEmail(email: string): Promise<UserEntity | undefined> {
    const userCreated = await this.ormRepository.findOneByOrFail({
      email,
    });

    if (userCreated === null) {
      return undefined;
    }

    return UserMap.TypeormToDomain(userCreated);
  }

  public async getById(id: string): Promise<UserEntity | undefined> {
    const user = await this.ormRepository.findOneOrFail({
      where: {
        id,
      },
    });

    return UserMap.TypeormToDomain(user);
  }

  public async update(entity: UserEntity): Promise<undefined> {
    await this.ormRepository.save({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      password: entity.password,
      resetPassword: entity.resetPassword,
    });

    return undefined;
  }
}
