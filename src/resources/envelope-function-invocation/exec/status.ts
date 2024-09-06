// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

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
  retrieve(requestId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.InvokeFunctionResponse> {
    return this._client.get(`/v2/nvcf/exec/status/${requestId}`, options);
  }
}
