// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClusterGroupsAPI from './cluster-groups';

export class ClusterGroupsAndGPUs extends APIResource {
  clusterGroups: ClusterGroupsAPI.ClusterGroups = new ClusterGroupsAPI.ClusterGroups(this._client);
}

export namespace ClusterGroupsAndGPUs {
  export import ClusterGroups = ClusterGroupsAPI.ClusterGroups;
  export import ClusterGroupsResponse = ClusterGroupsAPI.ClusterGroupsResponse;
}
