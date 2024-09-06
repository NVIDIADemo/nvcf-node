// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as FunctionsAPI from './functions/functions';

export class UserSecretManagement extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
}

export namespace UserSecretManagement {
  export import Functions = FunctionsAPI.Functions;
}
