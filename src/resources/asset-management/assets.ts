// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AssetsAPI from './assets';

export class Assets extends APIResource {
  /**
   * Returns details for the specified asset-id belonging to the current NVIDIA Cloud
   * Account. Requires either a bearer token or an api-key with 'invoke_function'
   * scope in the HTTP Authorization header.
   */
  retrieve(assetId: string, options?: Core.RequestOptions): Core.APIPromise<AssetResponse> {
    return this._client.get(`/v2/nvcf/assets/${assetId}`, options);
  }

  /**
   * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either a
   * bearer token or an api-key with 'invoke_function' scope in the HTTP
   * Authorization header.
   */
  delete(assetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/nvcf/assets/${assetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AssetResponse {
  /**
   * Data Transfer Object(DTO) representing an asset
   */
  asset?: AssetResponse.Asset;
}

export namespace AssetResponse {
  /**
   * Data Transfer Object(DTO) representing an asset
   */
  export interface Asset {
    /**
     * Asset id
     */
    assetId?: string;

    /**
     * Content-type specified when creating the asset
     */
    contentType?: string;

    /**
     * Description specified when creating the asset
     */
    description?: string;
  }
}

export namespace Assets {
  export import AssetResponse = AssetsAPI.AssetResponse;
}
