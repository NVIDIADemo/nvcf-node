// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FunctionsAPI from './functions';
import * as Shared from '../../shared';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

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
}

export interface FunctionAddParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export interface FunctionRemoveParams {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: Shared.AuthorizedPartyDTO;
}

export namespace Functions {
  export import FunctionAddParams = FunctionsAPI.FunctionAddParams;
  export import FunctionRemoveParams = FunctionsAPI.FunctionRemoveParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionAddParams = VersionsAPI.VersionAddParams;
  export import VersionRemoveParams = VersionsAPI.VersionRemoveParams;
}
