// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExecAPI from './exec/exec';
import * as FunctionsAPI from './functions/functions';

export class EnvelopeFunctionInvocation extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  exec: ExecAPI.Exec = new ExecAPI.Exec(this._client);
}

export namespace EnvelopeFunctionInvocation {
  export import Functions = FunctionsAPI.Functions;
  export import FunctionInvokeParams = FunctionsAPI.FunctionInvokeParams;
  export import Exec = ExecAPI.Exec;
}
