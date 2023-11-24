import { ApiError } from './api/client.js';

export class BaseError extends Error {}

export class InvalidInputError extends BaseError {}

export class InternalError extends BaseError {}

export abstract class RequestError extends BaseError {}

export class NetworkError extends RequestError {}

export class HttpError extends RequestError implements ApiError {
  readonly error: string;
  readonly status_code: number;
  readonly extensions: {
    code: string;
    state?:
      | {
          [key: string]: unknown;
        }
      | null
      | undefined;
  };

  constructor(error: ApiError) {
    super(error.message, { cause: error });
    this.error = error.error;
    this.status_code = error.status_code;
    this.extensions = error.extensions;
  }
}
