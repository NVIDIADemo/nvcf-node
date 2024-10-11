// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Provides details of all the queues associated with the specified function. If a
   * function has multiple versions and they are all deployed, then the response
   * includes details of all the queues. If the specified function is public, then
   * Account Admin cannot perform this operation. Requires a bearer token or an
   * api-key with 'queue_details' scope in the HTTP Authorization header.
   */
  retrieveAll(functionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.QueuesResponse> {
    return this._client.get(`/v2/nvcf/queues/functions/${functionId}`, options);
  }
}

export namespace Functions {
  export import Versions = VersionsAPI.Versions;
}
