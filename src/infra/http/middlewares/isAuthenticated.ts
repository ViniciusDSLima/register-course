import { NextFunction, Request, Response } from 'express';
import { AuthenticateError, InvalidTokenError } from '../../../lib/errros';
import * as jwt from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AuthenticateError('JWT token is missing',
      'Token jwt eh necessario');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();

  } catch (error) {
    throw new InvalidTokenError('Invalid JWT token.',
      'Token jwt invalido');
  }
}
