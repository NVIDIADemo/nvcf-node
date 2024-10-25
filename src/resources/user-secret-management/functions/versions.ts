// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';

export class Versions extends APIResource {
  /**
   * Updates secrets for the specified function version. This endpoint requires
   * either a bearer token or an api-key with 'update_secrets' scope in the HTTP
   * Authorization header.
   */
  update(
    functionId: string,
    versionId: string,
    body: VersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/v2/nvcf/secrets/functions/${functionId}/versions/${versionId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface VersionUpdateParams {
  /**
   * Secrets
   */
  secrets: Array<VersionUpdateParams.Secret>;
}

export namespace VersionUpdateParams {
  /**
   * Data Transfer Object(DTO) representing secret name/value pair
   */
  export interface Secret {
    /**
     * Secret name
     */
    name: string;

    /**
     * Secret value
     */
    value: string;
  }
}

export namespace Versions {
  export import VersionUpdateParams = VersionsAPI.VersionUpdateParams;
}
