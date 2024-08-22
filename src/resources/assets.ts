// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AssetsAPI from './assets';

export class Assets extends APIResource {
  /**
   * Creates a unique id representing an asset and a pre-signed URL to upload the
   * asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either a
   * bearer token or an api-key with 'invoke_function' scope in the HTTP
   * Authorization header.
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateAssetResponse> {
    return this._client.post('/v2/nvcf/assets', { body, ...options });
  }

  /**
   * List assets owned by the current NVIDIA Cloud Account. Requires either a bearer
   * token or an api-key with invoke_function scope in the HTTP Authorization header.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ListAssetsResponse> {
    return this._client.get('/v2/nvcf/assets', options);
  }
}

/**
 * Response body containing asset-id and the corresponding pre-signed URL to upload
 * an asset of specified content-type to AWS S3 bucket.
 */
export interface CreateAssetResponse {
  /**
   * Unique id of the asset to be uploaded to AWS S3 bucket
   */
  assetId?: string;

  /**
   * Content type of the asset such image/png, image/jpeg, etc.
   */
  contentType?: string;

  /**
   * Asset description to be used when uploading the asset
   */
  description?: string;

  /**
   * Pre-signed upload URL to upload asset
   */
  uploadUrl?: string;
}

/**
 * Response body containing list of assets of the current nca id
 */
export interface ListAssetsResponse {
  /**
   * List of assets uploaded for the nca id
   */
  assets?: Array<ListAssetsResponse.Asset>;
}

export namespace ListAssetsResponse {
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

export interface AssetCreateParams {
  /**
   * Content type of the asset such image/png, image/jpeg, etc.
   */
  contentType: string;

  /**
   * Asset description
   */
  description: string;
}

export namespace Assets {
  export import CreateAssetResponse = AssetsAPI.CreateAssetResponse;
  export import ListAssetsResponse = AssetsAPI.ListAssetsResponse;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
}
