// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../shared';

export class Versions extends APIResource {
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
  ): Core.APIPromise<Shared.AuthorizedPartiesResponse> {
    return this._client.patch(
      `/v2/nvcf/authorizations/functions/${functionId}/versions/${functionVersionId}/add`,
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
  ): Core.APIPromise<Shared.AuthorizedPartiesResponse> {
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
  authorizedParty: VersionAddParams.AuthorizedParty;
}

export namespace VersionAddParams {
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

export interface VersionRemoveParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: VersionRemoveParams.AuthorizedParty;
}

export namespace VersionRemoveParams {
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

export namespace Versions {
  export import VersionAddParams = VersionsAPI.VersionAddParams;
  export import VersionRemoveParams = VersionsAPI.VersionRemoveParams;
}
