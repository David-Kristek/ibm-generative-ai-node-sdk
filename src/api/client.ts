import createClient, { FetchOptions, FetchResponse } from 'openapi-fetch';

import { FilterKeys } from '../utils/types.js';

import { components, paths } from './schema.js';

export type ApiClient = ReturnType<typeof createClient<paths>>;

export function createApiClient(
  ...params: Parameters<typeof createClient<paths>>
): ApiClient {
  return createClient<paths>(...params);
}

export type ApiClientOptions<
  METHOD extends keyof ApiClient,
  PATH extends Parameters<ApiClient[METHOD]>[0],
> = FetchOptions<FilterKeys<paths[PATH], Lowercase<METHOD>>>;

export type ApiClientResponse<
  METHOD extends keyof ApiClient,
  PATH extends Parameters<ApiClient[METHOD]>[0] = Parameters<
    ApiClient[METHOD]
  >[0],
> = FetchResponse<FilterKeys<paths[PATH], Lowercase<METHOD>>>;

export type ApiError = any; // TODO components['schemas']['BaseErrorResponse'];
