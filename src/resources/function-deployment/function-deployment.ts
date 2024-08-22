// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FunctionsAPI from './functions/functions';

export class FunctionDeployment extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
}

export namespace FunctionDeployment {
  export import Functions = FunctionsAPI.Functions;
}
