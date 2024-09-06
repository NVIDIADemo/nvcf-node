// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuthorizationsAPI from './authorizations/authorizations';
import * as FunctionsAPI from './functions/functions';

export class Nvcf extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  authorizations: AuthorizationsAPI.Authorizations = new AuthorizationsAPI.Authorizations(this._client);
}

export namespace Nvcf {
  export import Functions = FunctionsAPI.Functions;
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionListParams = FunctionsAPI.FunctionListParams;
  export import Authorizations = AuthorizationsAPI.Authorizations;
}
