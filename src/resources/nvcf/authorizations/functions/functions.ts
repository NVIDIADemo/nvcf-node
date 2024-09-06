// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as FunctionsAPI from './functions';
import * as Shared from '../../../shared';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Lists NVIDIA Cloud Account IDs that are authorized to invoke any version of the
   * specified function. The response includes an array showing authorized accounts
   * for each version. Individual versions of a function can have their own
   * authorized accounts. So, each object in the array can have different authorized
   * accounts listed. Access to this functionality mandates the inclusion of a bearer
   * token with the 'authorize_clients' scope in the HTTP Authorization header
   */
  list(functionId: string, options?: Core.RequestOptions): Core.APIPromise<ListAuthorizedPartiesResponse> {
    return this._client.get(`/v2/nvcf/authorizations/functions/${functionId}`, options);
  }

  /**
   * Deletes all the extra NVIDIA Cloud Accounts that were authorized to invoke the
   * function and all its versions. If a function version has its own set of
   * authorized accounts, those are not deleted. If the specified function is public,
   * then Account Admin cannot perform this operation. Access to this functionality
   * mandates the inclusion of a bearer token with the 'authorize_clients' scope in
   * the HTTP Authorization header
   */
  delete(
    functionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedPartiesResponse> {
    return this._client.delete(`/v2/nvcf/authorizations/functions/${functionId}`, options);
  }

  /**
   * Authorizes additional NVIDIA Cloud Accounts to invoke any version of the
   * specified function. By default, a function belongs to the NVIDIA Cloud Account
   * that created it, and the credentials used for function invocation must reference
   * the same NVIDIA Cloud Account. Upon invocation of this endpoint, any existing
   * authorized accounts will be overwritten by the newly specified authorized
   * accounts. Access to this functionality mandates the inclusion of a bearer token
   * with the 'authorize_clients' scope in the HTTP Authorization header
   */
  authorize(
    functionId: string,
    body: FunctionAuthorizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedPartiesResponse> {
    return this._client.post(`/v2/nvcf/authorizations/functions/${functionId}`, { body, ...options });
  }
}

/**
 * Parties authorized to invoke function
 */
export interface ListAuthorizedPartiesResponse {
  /**
   * Functions with authorized parties and other details
   */
  functions: Array<ListAuthorizedPartiesResponse.Function>;
}

export namespace ListAuthorizedPartiesResponse {
  /**
   * Data Transfer Object(DTO) representing a function with authorized accounts
   */
  export interface Function {
    /**
     * Function id
     */
    id: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Authorized parties allowed to invoke the function
     */
    authorizedParties?: Array<Function.AuthorizedParty>;

    /**
     * Function version id
     */
    versionId?: string;
  }

  export namespace Function {
    /**
     * Data Transfer Object(DTO) representing an authorized party.
     */
    export interface AuthorizedParty {
      /**
       * NVIDIA Cloud Account authorized to invoke the function
       */
      ncaId: string;

      /**
       * Client Id -- 'sub' claim in the JWT. This field should not be specified anymore.
       */
      clientId?: string;
    }
  }
}

export interface FunctionAuthorizeParams {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: Array<FunctionAuthorizeParams.AuthorizedParty>;
}

export namespace FunctionAuthorizeParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  export interface AuthorizedParty {
    /**
     * NVIDIA Cloud Account authorized to invoke the function
     */
    ncaId: string;

    /**
     * Client Id -- 'sub' claim in the JWT. This field should not be specified anymore.
     */
    clientId?: string;
  }
}

export namespace Functions {
  export import ListAuthorizedPartiesResponse = FunctionsAPI.ListAuthorizedPartiesResponse;
  export import FunctionAuthorizeParams = FunctionsAPI.FunctionAuthorizeParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionAuthorizeParams = VersionsAPI.VersionAuthorizeParams;
}
