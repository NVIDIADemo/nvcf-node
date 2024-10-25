// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FunctionsAPI from './functions/functions';

export class Authorizations extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
}

export namespace Authorizations {
  export import Functions = FunctionsAPI.Functions;
  export type ListAuthorizedPartiesResponse = FunctionsAPI.ListAuthorizedPartiesResponse;
  export type FunctionAddParams = FunctionsAPI.FunctionAddParams;
  export type FunctionAuthorizeParams = FunctionsAPI.FunctionAuthorizeParams;
  export type FunctionRemoveParams = FunctionsAPI.FunctionRemoveParams;
}
