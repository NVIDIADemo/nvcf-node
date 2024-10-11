// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from 'qs';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['NVCF_AUTH_TOKEN'].
   */
  authToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NVCF_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the NVCF API.
 */
export class NVCF extends Core.APIClient {
  authToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the NVCF API.
   *
   * @param {string | undefined} [opts.authToken=process.env['NVCF_AUTH_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['NVCF_BASE_URL'] ?? https://api.nvcf.nvidia.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('NVCF_BASE_URL'),
    authToken = Core.readEnv('NVCF_AUTH_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (authToken === undefined) {
      throw new Errors.NVCFError(
        "The NVCF_AUTH_TOKEN environment variable is missing or empty; either provide it, or instantiate the NVCF client with an authToken option, like new NVCF({ authToken: 'My Auth Token' }).",
      );
    }

    const options: ClientOptions = {
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.nvcf.nvidia.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authToken = authToken;
  }

  userSecretManagement: API.UserSecretManagement = new API.UserSecretManagement(this);
  functionManagement: API.FunctionManagement = new API.FunctionManagement(this);
  functionDeployment: API.FunctionDeployment = new API.FunctionDeployment(this);
  functionInvocation: API.FunctionInvocation = new API.FunctionInvocation(this);
  envelopeFunctionInvocation: API.EnvelopeFunctionInvocation = new API.EnvelopeFunctionInvocation(this);
  nvcf: API.NVCF = new API.NVCF(this);
  assets: API.Assets = new API.Assets(this);
  authorizations: API.Authorizations = new API.Authorizations(this);
  queues: API.Queues = new API.Queues(this);
  pexec: API.Pexec = new API.Pexec(this);
  clusterGroupsAndGPUs: API.ClusterGroupsAndGPUs = new API.ClusterGroupsAndGPUs(this);
  clientManagementForNVIDIASuperAdmins: API.ClientManagementForNVIDIASuperAdmins =
    new API.ClientManagementForNVIDIASuperAdmins(this);
  assetManagement: API.AssetManagement = new API.AssetManagement(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.authToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static NVCF = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NVCFError = Errors.NVCFError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  NVCFError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace NVCF {
  export import RequestOptions = Core.RequestOptions;

  export import UserSecretManagement = API.UserSecretManagement;

  export import FunctionManagement = API.FunctionManagement;

  export import FunctionDeployment = API.FunctionDeployment;

  export import FunctionInvocation = API.FunctionInvocation;

  export import EnvelopeFunctionInvocation = API.EnvelopeFunctionInvocation;

  export import NVCF = API.NVCF;

  export import Assets = API.Assets;
  export import CreateAssetResponse = API.CreateAssetResponse;
  export import ListAssetsResponse = API.ListAssetsResponse;
  export import AssetCreateParams = API.AssetCreateParams;

  export import Authorizations = API.Authorizations;

  export import Queues = API.Queues;

  export import Pexec = API.Pexec;

  export import ClusterGroupsAndGPUs = API.ClusterGroupsAndGPUs;

  export import ClientManagementForNVIDIASuperAdmins = API.ClientManagementForNVIDIASuperAdmins;

  export import AssetManagement = API.AssetManagement;

  export import AuthorizedParties = API.AuthorizedParties;
  export import AuthorizedPartyDTO = API.AuthorizedPartyDTO;
  export import CreateFunctionResponse = API.CreateFunctionResponse;
  export import Function = API.Function;
  export import FunctionDTO = API.FunctionDTO;
  export import FunctionsResponse = API.FunctionsResponse;
  export import HealthDTO = API.HealthDTO;
  export import InvokeFunctionResponse = API.InvokeFunctionResponse;
  export import QueuesResponse = API.QueuesResponse;
}

export default NVCF;
