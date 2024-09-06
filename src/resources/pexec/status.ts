// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as StatusAPI from './status';

export class Status extends APIResource {
  /**
   * Retrieves the status of an in-progress or pending request using its unique
   * invocation request ID. If the result is available, it will be included in the
   * response, marking the request as fulfilled. Conversely, if the result is not yet
   * available, the request is deemed pending. Access to this endpoint mandates
   * inclusion of either a bearer token or an api-key with 'invoke_function' scope in
   * the HTTP Authorization header. In-progress responses are returned in order. If
   * no in-progress response is received during polling you will receive the most
   * recent in-progress response. Only the first 256 unread in-progress messages are
   * kept.
   */
  retrieve(
    requestId: string,
    params?: StatusRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusRetrieveResponse>;
  retrieve(requestId: string, options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse>;
  retrieve(
    requestId: string,
    params: StatusRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(requestId, {}, params);
    }
    const { 'NVCF-POLL-SECONDS': nvcfPollSeconds } = params;
    return this._client.get(`/v2/nvcf/pexec/status/${requestId}`, {
      ...options,
      headers: {
        ...(nvcfPollSeconds?.toString() != null ?
          { 'NVCF-POLL-SECONDS': nvcfPollSeconds?.toString() }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface StatusRetrieveResponse {
  char?: string;

  direct?: boolean;

  double?: number;

  float?: number;

  int?: number;

  long?: number;

  readOnly?: boolean;

  short?: number;
}

export interface StatusRetrieveParams {
  'NVCF-POLL-SECONDS'?: number;
}

export namespace Status {
  export import StatusRetrieveResponse = StatusAPI.StatusRetrieveResponse;
  export import StatusRetrieveParams = StatusAPI.StatusRetrieveParams;
}
