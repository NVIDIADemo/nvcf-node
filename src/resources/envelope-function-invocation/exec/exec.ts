// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as StatusAPI from './status';

export class Exec extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

export namespace Exec {
  export import Status = StatusAPI.Status;
}
