// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as VersionsAPI from './versions';

export class Functions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export namespace Functions {
  export import Versions = VersionsAPI.Versions;
  export import DeploymentResponse = VersionsAPI.DeploymentResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionUpdateParams = VersionsAPI.VersionUpdateParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
}
