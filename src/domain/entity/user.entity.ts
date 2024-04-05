import { DomainError } from '../../lib/errros';
import * as bcrypt from 'bcrypt';

export type UserRequestType = {
  id: string;
  name: string;
  email: string;
  password: string;
  resetPassword: boolean;
  created_at: Date;
  updated_at: Date;
}

export type UserResponseType = {
  id: string;
  name: string;
  email: string;
  resetPassword: boolean;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export class UserEntity {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _created_at: Date;
  private readonly _updated_at: Date;

  constructor(data: UserRequestType) {
    this._id = data.id;
    this._name = data.name;
    this._email = data.email;
    this._password = data.password;
    this._resetPassword = data.resetPassword;
    this._created_at = data.created_at;
    this._updated_at = data.updated_at;

    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  private _resetPassword: boolean;

  get resetPassword(): boolean {
    return this._resetPassword;
  }

  get created_at(): Date {
    return this._created_at;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }

  public hashPassword(): void {
    this._password = bcrypt.hashSync(this._password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassWord: string) {
    return bcrypt.compareSync(unencryptedPassWord, this._password);
  }

  public changePassword(newPassword: string): void {
    this._password = newPassword;
    this.hashPassword();
  }

  public changeResetPassword(): void {
    this._resetPassword = true;
  }

  private validate() {
    if (!this._id) {
      throw new DomainError('id is required');
    }

    if (!this._name) {
      throw new DomainError('name is required');
    }
    if (!this._email) {
      throw new DomainError('email is required');
    }

    if (!this._password) {
      throw new DomainError('password is required');
    }
  }
}
