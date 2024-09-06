// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PositionAPI from './position';

export class Position extends APIResource {
  /**
   * Using the specified function invocation request id, returns the estimated
   * position of the corresponding message up to 1000 in the queue. Requires a bearer
   * token or an api-key with 'queue_details' scope in the HTTP Authorization header.
   */
  retrieve(requestId: string, options?: Core.RequestOptions): Core.APIPromise<GetPositionInQueueResponse> {
    return this._client.get(`/v2/nvcf/queues/${requestId}/position`, options);
  }
}

/**
 * Request position in queue for invocation request
 */
export interface GetPositionInQueueResponse {
  /**
   * Function id
   */
  functionId: string;

  /**
   * Function version id
   */
  functionVersionId: string;

  /**
   * Position of request in queue
   */
  positionInQueue?: number;
}

export namespace Position {
  export import GetPositionInQueueResponse = PositionAPI.GetPositionInQueueResponse;
}
