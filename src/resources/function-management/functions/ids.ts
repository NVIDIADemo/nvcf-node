// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as IDsAPI from './ids';

export class IDs extends APIResource {
  /**
   * Lists ids of all the functions in the authenticated NVIDIA Cloud Account.
   * Requires either a bearer token or an api-key with 'list_functions' or
   * 'list_functions_details' scopes in the HTTP Authorization header.
   */
  retrieveAll(
    query?: IDRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IDRetrieveAllResponse>;
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<IDRetrieveAllResponse>;
  retrieveAll(
    query: IDRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IDRetrieveAllResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveAll({}, query);
    }
    return this._client.get('/v2/nvcf/functions/ids', { query, ...options });
  }
}

/**
 * Response body containing list of function ids in an account
 */
export interface IDRetrieveAllResponse {
  /**
   * List of function ids
   */
  functionIds: Array<string>;
}

export interface IDRetrieveAllParams {
  /**
   * Query param 'visibility' indicates the kind of functions to be included in the
   * response.
   */
  visibility?: Array<'authorized' | 'private' | 'public'>;
}

export namespace IDs {
  export import IDRetrieveAllResponse = IDsAPI.IDRetrieveAllResponse;
  export import IDRetrieveAllParams = IDsAPI.IDRetrieveAllParams;
}
