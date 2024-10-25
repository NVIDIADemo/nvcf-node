// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../shared';

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
    body: VersionInvokeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.InvokeFunctionResponse> {
    return this._client.post(`/v2/nvcf/exec/functions/${functionId}/versions/${versionId}`, {
      body,
      ...options,
    });
  }
}

export interface VersionInvokeParams {
  requestBody: unknown;

  /**
   * Data Transfer Object(DTO) representing header/address for Cloud Functions
   * processing.
   */
  requestHeader?: VersionInvokeParams.RequestHeader;
}

export namespace VersionInvokeParams {
  /**
   * Data Transfer Object(DTO) representing header/address for Cloud Functions
   * processing.
   */
  export interface RequestHeader {
    /**
     * List of UUIDs corresponding to the uploaded assets to be used as input for
     * executing the task.
     */
    inputAssetReferences?: Array<string>;

    /**
     * Metadata used for billing/metering purposes.
     */
    meteringData?: Array<RequestHeader.MeteringData>;

    /**
     * Polling timeout duration.
     */
    pollDurationSeconds?: number;
  }

  export namespace RequestHeader {
    /**
     * Data Transfer Object(DTO) representing a billing/metering data entry
     */
    export interface MeteringData {
      /**
       * Metering/Billing key
       */
      key: string;

      /**
       * Metering/Billing value
       */
      value: string;
    }
  }
}

export namespace Versions {
  export import VersionInvokeParams = VersionsAPI.VersionInvokeParams;
}
