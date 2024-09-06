// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PositionAPI from './position';
import * as FunctionsAPI from './functions/functions';

export class Queues extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  position: PositionAPI.Position = new PositionAPI.Position(this._client);
}

export namespace Queues {
  export import Functions = FunctionsAPI.Functions;
  export import Position = PositionAPI.Position;
  export import GetPositionInQueueResponse = PositionAPI.GetPositionInQueueResponse;
}
