// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuthorizationsAPI from './authorizations/authorizations';
import * as FunctionsAPI from './functions/functions';

export class NVCF extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  authorizations: AuthorizationsAPI.Authorizations = new AuthorizationsAPI.Authorizations(this._client);
}

export namespace NVCF {
  export import Functions = FunctionsAPI.Functions;
  export import FunctionCreateParams = FunctionsAPI.FunctionCreateParams;
  export import FunctionRetrieveAllParams = FunctionsAPI.FunctionRetrieveAllParams;
  export import Authorizations = AuthorizationsAPI.Authorizations;
}
