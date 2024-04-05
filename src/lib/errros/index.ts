export type ErrorType = {
  type: string;
  status: number;
  message: string;
  messageTranslated: string;
} & Error;

interface IError extends Error {
  type: string;
  status: number;
  message: string;
}

class NotFoundError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'NotFoundError';
    this.type = 'NOT_FOUND';
    this.status = 404;
  }
}

class BadRequestError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'BadRequestError';
    this.type = 'BAD_REQUEST';
    this.status = 400;
  }
}

class ResourceNotFoundError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'NotFoundError';
    this.type = 'RESOURCE_NOT_FOUND';
    this.status = 404;
  }
}

class AlreadyExist extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'UserAlreadyExist';
    this.type = 'ALREADY_EXIST';
    this.status = 409;
  }
}

class ValidationError extends Error {
  public type: string;

  constructor(message: string) {
    super(message);

    this.name = 'ValidationError';
    this.type = 'validation';
  }
}

class AuthorizationError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'AuthorizationError';
    this.type = 'UNAUTHORIZED';
    this.status = 403;
  }
}

class AuthenticateError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'AuthenticateError';
    this.type = 'INVALID_CREDENTIAL';
    this.status = 401;
  }
}

class AccessDeniedError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'AuthenticateError';
    this.type = 'ACCESS_DENIED';
    this.status = 401;
  }
}

class InvalidTokenError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'InvalidTokenError';
    this.type = 'INVALID_TOKEN';
    this.status = 401;
  }
}

class WithoutPermissionError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'WithoutPermissionError';
    this.type = 'WITHOUT_PERMISSION';
    this.status = 401;
  }
}

class InternalServerError extends Error {
  public type: string;
  public status: number;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'InternalServerError';
    this.type = 'INTERNAL';
    this.status = 500;
  }
}

export class DomainError extends Error {
  public type: string;
  public status: number;

  constructor(message: string) {
    super(message);

    this.name = 'DomainError';
    this.type = 'DOMAIN_ERROR';
    this.status = 400;
  }
}


class UploadError extends Error {
  public type: string;
  public messageTranslated: string;

  constructor(message: string, messageTranslated: string) {
    super(message);

    this.messageTranslated = messageTranslated;
    this.name = 'UploadError';
    this.type = 'UPLOAD_ERROR';
  }
}

export {
  NotFoundError,
  ValidationError,
  AuthorizationError,
  InternalServerError,
  IError,
  ResourceNotFoundError,
  AuthenticateError,
  AlreadyExist,
  WithoutPermissionError,
  InvalidTokenError,
  UploadError,
  BadRequestError,
  AccessDeniedError,
};
