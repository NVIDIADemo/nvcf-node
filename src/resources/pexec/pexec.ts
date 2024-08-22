// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StatusAPI from './status';

export class Pexec extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

export namespace Pexec {
  export import Status = StatusAPI.Status;
  export import StatusRetrieveResponse = StatusAPI.StatusRetrieveResponse;
  export import StatusRetrieveParams = StatusAPI.StatusRetrieveParams;
}
