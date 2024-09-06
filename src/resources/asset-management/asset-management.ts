// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';

export class AssetManagement extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export namespace AssetManagement {
  export import Assets = AssetsAPI.Assets;
  export import AssetResponse = AssetsAPI.AssetResponse;
}
