// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IDsAPI from './ids';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  ids: IDsAPI.IDs = new IDsAPI.IDs(this._client);
}

export namespace Functions {
  export import Versions = VersionsAPI.Versions;
  export import VersionUpdateParams = VersionsAPI.VersionUpdateParams;
  export import IDs = IDsAPI.IDs;
  export import ListFunctionIDsResponse = IDsAPI.ListFunctionIDsResponse;
  export import IDListParams = IDsAPI.IDListParams;
}
