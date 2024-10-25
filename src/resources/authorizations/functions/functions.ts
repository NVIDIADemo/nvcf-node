// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FunctionsAPI from './functions';
import * as Shared from '../../shared';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Deletes all the extra NVIDIA Cloud Accounts that were authorized to invoke the
   * function and all its versions. If a function version has its own set of
   * authorized accounts, those are not deleted. If the specified function is public,
   * then Account Admin cannot perform this operation. Access to this functionality
   * mandates the inclusion of a bearer token with the 'authorize_clients' scope in
   * the HTTP Authorization header
   */
  delete(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.delete(`/v2/nvcf/authorizations/functions/${functionId}`, options);
  }

  /**
   * Adds the specified NVIDIA Cloud Account to the set of authorized accounts that
   * are can invoke all the versions of the specified function. If the specified
   * function does not have any existing inheritable authorized accounts, it results
   * in a response with status 404. If the specified account is already in the set of
   * existing inheritable authorized accounts, it results in a response with status
   * code 409. If a function is public, then Account Admin cannot perform this
   * operation. Access to this functionality mandates the inclusion of a bearer token
   * with the 'authorize_clients' scope in the HTTP Authorization header
   */
  add(
    functionId: string,
    body: FunctionAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.patch(`/v2/nvcf/authorizations/functions/${functionId}/add`, { body, ...options });
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
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.post(`/v2/nvcf/authorizations/functions/${functionId}`, { body, ...options });
  }

  /**
   * Removes the specified NVIDIA Cloud Account from the set of authorized accounts
   * that can invoke all the versions of the specified function. If the specified
   * function does not have any existing inheritable authorized parties, it results
   * in a response with status 404. Also, if the specified account is not in the
   * existing set of inheritable authorized accounts, it results in a response with
   * status 400. If the specified function is public, then Account Admin cannot
   * perform this operation. Access to this functionality mandates the inclusion of a
   * bearer token with the 'authorize_clients' scope in the HTTP Authorization header
   */
  remove(
    functionId: string,
    body: FunctionRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.patch(`/v2/nvcf/authorizations/functions/${functionId}/remove`, { body, ...options });
  }

  /**
   * Lists NVIDIA Cloud Account IDs that are authorized to invoke any version of the
   * specified function. The response includes an array showing authorized accounts
   * for each version. Individual versions of a function can have their own
   * authorized accounts. So, each object in the array can have different authorized
   * accounts listed. Access to this functionality mandates the inclusion of a bearer
   * token with the 'authorize_clients' scope in the HTTP Authorization header
   */
  retrieveAll(
    functionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListAuthorizedPartiesResponse> {
    return this._client.get(`/v2/nvcf/authorizations/functions/${functionId}`, options);
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
    authorizedParties?: Array<Shared.AuthorizedPartyDTO>;

    /**
     * Function version id
     */
    versionId?: string;
  }
}

export interface FunctionAddParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export interface FunctionAuthorizeParams {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: Array<Shared.AuthorizedPartyDTO>;
}

export interface FunctionRemoveParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export namespace Functions {
  export import ListAuthorizedPartiesResponse = FunctionsAPI.ListAuthorizedPartiesResponse;
  export import FunctionAddParams = FunctionsAPI.FunctionAddParams;
  export import FunctionAuthorizeParams = FunctionsAPI.FunctionAuthorizeParams;
  export import FunctionRemoveParams = FunctionsAPI.FunctionRemoveParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionAddParams = VersionsAPI.VersionAddParams;
  export import VersionAuthorizeParams = VersionsAPI.VersionAuthorizeParams;
  export import VersionRemoveParams = VersionsAPI.VersionRemoveParams;
}
