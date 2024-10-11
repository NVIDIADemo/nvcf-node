// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../shared';

export class Versions extends APIResource {
  /**
   * Gets NVIDIA Cloud Account IDs that are authorized to invoke specified function
   * version. Response includes authorized accounts that were added specifically to
   * the function version and the inherited authorized accounts that were added at
   * the function level. Access to this functionality mandates the inclusion of a
   * bearer token with the 'authorize_clients' scope in the HTTP Authorization header
   */
  retrieve(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.get(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}`,
      options,
    );
  }

  /**
   * Deletes all the authorized accounts that are directly associated with the
   * specified function version. Authorized parties that are inherited by the
   * function version are not deleted. If the specified function version is public,
   * then Account Admin cannot perform this operation. Access to this functionality
   * mandates the inclusion of a bearer token with the 'authorize_clients' scope in
   * the HTTP Authorization header
   */
  delete(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.delete(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}`,
      options,
    );
  }

  /**
   * Adds the specified NVIDIA Cloud Account to the set of authorized accounts that
   * can invoke the specified function version. If the specified function version
   * does not have any existing inheritable authorized accounts, it results in a
   * response with status 404. If the specified account is already in the set of
   * existing authorized accounts that are directly associated with the function
   * version, it results in a response wit status code 409. If a function is public,
   * then Account Admin cannot perform this operation. Access to this functionality
   * mandates the inclusion of a bearer token with the 'authorize_clients' scope in
   * the HTTP Authorization header
   */
  add(
    functionId: string,
    functionVersionId: string,
    body: VersionAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.patch(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}/add`,
      { body, ...options },
    );
  }

  /**
   * Authorizes additional NVIDIA Cloud Accounts to invoke a specific function
   * version. By default, a function belongs to the NVIDIA Cloud Account that created
   * it, and the credentials used for function invocation must reference the same
   * NVIDIA Cloud Account. Upon invocation of this endpoint, any existing authorized
   * accounts will be overwritten by the newly specified authorized accounts. Access
   * to this functionality mandates the inclusion of a bearer token with the
   * 'authorize_clients' scope in the HTTP Authorization header
   */
  authorize(
    functionId: string,
    functionVersionId: string,
    body: VersionAuthorizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.post(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}`,
      { body, ...options },
    );
  }

  /**
   * Removes the specified NVIDIA Cloud Account from the set of authorized accounts
   * that are directly associated with specified function version. If the specified
   * function version does not have any of its own(not inherited) authorized
   * accounts, it results in a response with status 404. Also, if the specified
   * authorized account is not in the set of existing authorized parties that are
   * directly associated with the specified function version, it results in a
   * response with status code 400. If the specified function version is public, then
   * Account Admin cannot perform this operation. Access to this functionality
   * mandates the inclusion of a bearer token with the 'authorize_clients' scope in
   * the HTTP Authorization header
   */
  remove(
    functionId: string,
    functionVersionId: string,
    body: VersionRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AuthorizedParties> {
    return this._client.patch(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}/remove`,
      { body, ...options },
    );
  }
}

export interface VersionAddParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export interface VersionAuthorizeParams {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: Array<Shared.AuthorizedPartyDTO>;
}

export interface VersionRemoveParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export namespace Versions {
  export import VersionAddParams = VersionsAPI.VersionAddParams;
  export import VersionAuthorizeParams = VersionsAPI.VersionAuthorizeParams;
  export import VersionRemoveParams = VersionsAPI.VersionRemoveParams;
}
