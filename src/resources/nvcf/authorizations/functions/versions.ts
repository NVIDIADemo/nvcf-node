// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../../shared';

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
}

export interface VersionAuthorizeParams {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: Array<Shared.AuthorizedPartyDTO>;
}

export namespace Versions {
  export import VersionAuthorizeParams = VersionsAPI.VersionAuthorizeParams;
}
