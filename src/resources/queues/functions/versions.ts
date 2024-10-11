// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Versions extends APIResource {
  /**
   * Provides details of all the queues associated with the specified function. If a
   * function has multiple versions and they are all deployed, then the response
   * includes details of all the queues. If the specified function is public, then
   * Account Admin cannot perform this operation. Requires a bearer token or an
   * api-key with 'queue_details' scope in the HTTP Authorization header.
   */
  retrieveAll(
    functionId: string,
    versionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Queues> {
    return this._client.get(`/v2/nvcf/queues/functions/${functionId}/versions/${versionId}`, options);
  }
}
