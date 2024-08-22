// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FunctionsAPI from './functions/functions';

export class Authorizations extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
}

export namespace Authorizations {
  export import Functions = FunctionsAPI.Functions;
  export import FunctionAddParams = FunctionsAPI.FunctionAddParams;
  export import FunctionRemoveParams = FunctionsAPI.FunctionRemoveParams;
}
