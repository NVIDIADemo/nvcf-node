// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';

export class Versions extends APIResource {
  /**
   * Invokes the specified function that was successfully deployed. If the version is
   * not specified, any active function versions will handle the request. If the
   * version is specified in the URI, then the request is exclusively processed by
   * the designated version of the function. By default, this endpoint will block for
   * 5 seconds. If the request is not fulfilled before the timeout, it's status is
   * considered in-progress or pending and the response includes HTTP status code 202
   * with an invocation request ID, indicating that the client should commence
   * polling for the result using the invocation request ID. Access to this endpoint
   * mandates inclusion of either a bearer token or an api-key with 'invoke_function'
   * scope in the HTTP Authorization header. Additionally, this endpoint has the
   * capability to provide updates on the progress of the request, contingent upon
   * the workload's provision of such information. In-progress responses are returned
   * in order. If no in-progress response is received during polling you will receive
   * the most recent in-progress response. Only the first 256 unread in-progress
   * messages are kept.
   */
  invoke(
    functionId: string,
    versionId: string,
    params: VersionInvokeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionInvokeResponse> {
    const {
      body,
      'NVCF-INPUT-ASSET-REFERENCES': nvcfInputAssetReferences,
      'NVCF-POLL-SECONDS': nvcfPollSeconds,
    } = params;
    return this._client.post(`/v2/nvcf/pexec/functions/${functionId}/versions/${versionId}`, {
      body: body,
      ...options,
      headers: {
        ...(nvcfInputAssetReferences?.toString() != null ?
          { 'NVCF-INPUT-ASSET-REFERENCES': nvcfInputAssetReferences?.toString() }
        : undefined),
        ...(nvcfPollSeconds?.toString() != null ?
          { 'NVCF-POLL-SECONDS': nvcfPollSeconds?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface VersionInvokeResponse {
  char?: string;

  direct?: boolean;

  double?: number;

  float?: number;

  int?: number;

  long?: number;

  readOnly?: boolean;

  short?: number;
}

export interface VersionInvokeParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param:
   */
  'NVCF-INPUT-ASSET-REFERENCES'?: Array<string>;

  /**
   * Header param:
   */
  'NVCF-POLL-SECONDS'?: number;
}

export namespace Versions {
  export import VersionInvokeResponse = VersionsAPI.VersionInvokeResponse;
  export import VersionInvokeParams = VersionsAPI.VersionInvokeParams;
}
