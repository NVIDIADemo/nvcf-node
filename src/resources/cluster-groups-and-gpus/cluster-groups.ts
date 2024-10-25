// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ClusterGroupsAPI from './cluster-groups';

export class ClusterGroups extends APIResource {
  /**
   * Lists Cluster Groups for the current account. The response includes cluster
   * groups defined specifically in the current account and publicly available
   * cluster groups such as GFN, OCI, etc. Requires a bearer token with
   * 'list_cluster_groups' scope in HTTP Authorization header.
   */
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<ClusterGroupsResponse> {
    return this._client.get('/v2/nvcf/clusterGroups', options);
  }
}

export interface ClusterGroupsResponse {
  clusterGroups?: Array<ClusterGroupsResponse.ClusterGroup>;
}

export namespace ClusterGroupsResponse {
  export interface ClusterGroup {
    id?: string;

    authorizedNcaIds?: Array<string>;

    clusters?: Array<ClusterGroup.Cluster>;

    gpus?: Array<ClusterGroup.GPU>;

    name?: string;

    ncaId?: string;
  }

  export namespace ClusterGroup {
    export interface Cluster {
      id?: string;

      k8sVersion?: string;

      name?: string;
    }

    export interface GPU {
      instanceTypes?: Array<GPU.InstanceType>;

      name?: string;
    }

    export namespace GPU {
      export interface InstanceType {
        default?: boolean;

        description?: string;

        name?: string;
      }
    }
  }
}

export namespace ClusterGroups {
  export import ClusterGroupsResponse = ClusterGroupsAPI.ClusterGroupsResponse;
}
