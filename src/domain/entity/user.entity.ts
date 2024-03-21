import { DomainError } from '../../lib/errros';

export type UserRequestType = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export type UserResponseType = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export class UserEntity {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(data: UserRequestType) {
    this._id = data.id;
    this._name = data.name;
    this._email = data.email;
    this._password = data.password;
    this._created_at = data.created_at;
    this._updated_at = data.updated_at;

    this.validate();
  }

  get Id(): string {
    return this._id;
  }

  get Name(): string {
    return this._name;
  }

  get Email(): string {
    return this._email;
  }

  get Password(): string {
    return this._password;
  }

  private validate() {
    if (this._id) {
      throw new DomainError('id is required');
    }

    if (this._name) {
      throw new DomainError('name is required');
    }
    if (this._email) {
      throw new DomainError('email is required');
    }

    if (this._password) {
      throw new DomainError('password is required');
    }
  }
}
