// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../shared';

export class Versions extends APIResource {
  /**
   * Retrieves detailed information of the specified function version in the
   * authenticated NVIDIA Cloud Account. Requires either a bearer token or an api-key
   * with 'list_functions' or 'list_functions_details' scopes in the HTTP
   * Authorization header.
   */
  retrieve(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Function> {
    return this._client.get(`/v2/nvcf/functions/${functionId}/versions/${functionVersionId}`, options);
  }

  /**
   * Updates metadata, such as tags, of the specified function version within the
   * authenticated NVIDIA Cloud Account. Values specified in the payload completely
   * override the existing values. Requires a bearer token with 'update_function'
   * scope in the HTTP Authorization header.
   */
  update(
    functionId: string,
    functionVersionId: string,
    body: VersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Function> {
    return this._client.put(`/v2/nvcf/metadata/functions/${functionId}/versions/${functionVersionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes the specified function version in the authenticated NVIDIA Cloud
   * Account. Requires a bearer token with 'delete_function' scope in the HTTP
   * Authorization header. If the function version is public, then Account Admin
   * cannot delete the function.
   */
  delete(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/v2/nvcf/functions/${functionId}/versions/${functionVersionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface VersionUpdateParams {
  /**
   * Set of tags provided by user
   */
  tags?: Array<string>;
}

export namespace Versions {
  export import VersionUpdateParams = VersionsAPI.VersionUpdateParams;
}
