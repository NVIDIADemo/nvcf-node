// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as FunctionsAPI from './functions';
import * as Shared from '../../shared';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Creates a new function within the authenticated NVIDIA Cloud Account. Requires a
   * bearer token with 'register_function' scope in the HTTP Authorization header.
   */
  create(
    body: FunctionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CreateFunctionResponse> {
    return this._client.post('/v2/nvcf/functions', { body, ...options });
  }

  /**
   * Lists all the functions associated with the authenticated NVIDIA Cloud Account.
   * Requires either a bearer token or an api-key with 'list_functions' or
   * 'list_functions_details' scopes in the HTTP Authorization header.
   */
  list(
    query?: FunctionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ListFunctionsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Shared.ListFunctionsResponse>;
  list(
    query: FunctionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ListFunctionsResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v2/nvcf/functions', { query, ...options });
  }
}

export interface FunctionCreateParams {
  /**
   * Entrypoint for invoking the container to process a request
   */
  inferenceUrl: string;

  /**
   * Function name must start with lowercase/uppercase/digit and can only contain
   * lowercase, uppercase, digit, hyphen, and underscore characters
   */
  name: string;

  /**
   * Invocation request body format
   */
  apiBodyFormat?: 'PREDICT_V2' | 'CUSTOM';

  /**
   * Args to be passed when launching the container
   */
  containerArgs?: string;

  /**
   * Environment settings for launching the container
   */
  containerEnvironment?: Array<FunctionCreateParams.ContainerEnvironment>;

  /**
   * Optional custom container image
   */
  containerImage?: string;

  /**
   * Optional function/version description
   */
  description?: string;

  /**
   * Optional function type, used to indicate a STREAMING function. Defaults to
   * DEFAULT.
   */
  functionType?: 'DEFAULT' | 'STREAMING';

  /**
   * Data Transfer Object(DTO) representing a function ne
   */
  health?: FunctionCreateParams.Health;

  /**
   * Health endpoint for the container or the helmChart
   */
  healthUri?: string;

  /**
   * Optional Helm Chart
   */
  helmChart?: string;

  /**
   * Helm Chart Service Name is required when helmChart property is specified
   */
  helmChartServiceName?: string;

  /**
   * Optional port number where the inference listener is running. Defaults to 8000
   * for Triton.
   */
  inferencePort?: number;

  /**
   * Optional set of models
   */
  models?: Array<FunctionCreateParams.Model>;

  /**
   * Optional set of resources
   */
  resources?: Array<FunctionCreateParams.Resource>;

  /**
   * Optional secrets
   */
  secrets?: Array<FunctionCreateParams.Secret>;

  /**
   * Optional set of tags - could be empty. Provided by user
   */
  tags?: Array<string>;
}

export namespace FunctionCreateParams {
  /**
   * Data Transfer Object(DTO) representing a container environment entry
   */
  export interface ContainerEnvironment {
    /**
     * Container environment key
     */
    key: string;

    /**
     * Container environment value
     */
    value: string;
  }

  /**
   * Data Transfer Object(DTO) representing a function ne
   */
  export interface Health {
    /**
     * Expected return status code considered as successful.
     */
    expectedStatusCode: number;

    /**
     * Port number where the health listener is running
     */
    port: number;

    /**
     * HTTP/gPRC protocol type for health endpoint
     */
    protocol: 'HTTP' | 'gRPC';

    /**
     * ISO 8601 duration string in PnDTnHnMn.nS format
     */
    timeout: string;

    /**
     * Health endpoint for the container or the helmChart
     */
    uri: string;
  }

  /**
   * Data Transfer Object(DTO) representing an artifact
   */
  export interface Model {
    /**
     * Artifact name
     */
    name: string;

    /**
     * Artifact URI
     */
    uri: string;

    /**
     * Artifact version
     */
    version: string;
  }

  /**
   * Data Transfer Object(DTO) representing an artifact
   */
  export interface Resource {
    /**
     * Artifact name
     */
    name: string;

    /**
     * Artifact URI
     */
    uri: string;

    /**
     * Artifact version
     */
    version: string;
  }

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

export interface FunctionListParams {
  /**
   * Query param 'visibility' indicates the kind of functions to be included in the
   * response.
   */
  visibility?: Array<'authorized' | 'private' | 'public'>;
}

export namespace Functions {
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionListParams = FunctionsAPI.FunctionListParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
}
