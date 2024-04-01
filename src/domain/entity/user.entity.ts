import { DomainError } from '../../lib/errros';
import { hashSync } from 'bcrypt';

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

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }

  private _resetPassword: boolean;

  get resetPassword(): boolean {
    return this._resetPassword;
  }

  private _created_at: Date;

  get created_at(): Date {
    return this._created_at;
  }

  private _updated_at: Date;

  get updated_at(): Date {
    return this._updated_at;
  }

  public hashPassword(): void {
    this._password = hashSync(this._password, 8);
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
