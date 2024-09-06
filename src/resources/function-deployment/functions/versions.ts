// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as VersionsAPI from './versions';
import * as Shared from '../../shared';

export class Versions extends APIResource {
  /**
   * Initiates deployment for the specified function version. Upon invocation of this
   * endpoint, the function's status transitions to 'DEPLOYING'. If the specified
   * function version is public, then Account Admin cannot perform this operation.
   * Access to this endpoint mandates a bearer token with 'deploy_function' scope in
   * the HTTP Authorization header.
   */
  create(
    functionId: string,
    functionVersionId: string,
    body: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentResponse> {
    return this._client.post(`/v2/nvcf/deployments/functions/${functionId}/versions/${functionVersionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Allows Account Admins to retrieve the deployment details of the specified
   * function version. Access to this endpoint mandates a bearer token with
   * 'deploy_function' scope in the HTTP Authorization header.
   */
  retrieve(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentResponse> {
    return this._client.get(
      `/v2/nvcf/deployments/functions/${functionId}/versions/${functionVersionId}`,
      options,
    );
  }

  /**
   * Updates the deployment specs of the specified function version. It's important
   * to note that GPU type and backend configurations cannot be modified through this
   * endpoint. If the specified function is public, then Account Admin cannot perform
   * this operation. Access to this endpoint mandates a bearer token with
   * 'deploy_function' scope in the HTTP Authorization header.
   */
  update(
    functionId: string,
    functionVersionId: string,
    body: VersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentResponse> {
    return this._client.put(`/v2/nvcf/deployments/functions/${functionId}/versions/${functionVersionId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes the deployment associated with the specified function. Upon deletion,
   * any active instances will be terminated, and the function's status will
   * transition to 'INACTIVE'. To undeploy a function version gracefully, specify
   * 'graceful=true' query parameter, allowing current tasks to complete before
   * terminating the instances. If the specified function version is public, then
   * Account Admin cannot perform this operation. Access to this endpoint mandates a
   * bearer token with 'deploy_function' scope in the HTTP Authorization header.
   */
  delete(
    functionId: string,
    functionVersionId: string,
    params?: VersionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FunctionResponse>;
  delete(
    functionId: string,
    functionVersionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FunctionResponse>;
  delete(
    functionId: string,
    functionVersionId: string,
    params: VersionDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.FunctionResponse> {
    if (isRequestOptions(params)) {
      return this.delete(functionId, functionVersionId, {}, params);
    }
    const { graceful } = params;
    return this._client.delete(`/v2/nvcf/deployments/functions/${functionId}/versions/${functionVersionId}`, {
      query: { graceful },
      ...options,
    });
  }
}

/**
 * Function Deployment Response
 */
export interface DeploymentResponse {
  /**
   * Function deployment response
   */
  deployment: DeploymentResponse.Deployment;
}

export namespace DeploymentResponse {
  /**
   * Function deployment response
   */
  export interface Deployment {
    /**
     * Function deployment creation timestamp
     */
    createdAt: string;

    /**
     * Function deployment details
     */
    deploymentSpecifications: Array<Deployment.DeploymentSpecification>;

    /**
     * Function id
     */
    functionId: string;

    /**
     * Function name
     */
    functionName: string;

    /**
     * Function status
     */
    functionStatus: 'ACTIVE' | 'DEPLOYING' | 'ERROR' | 'INACTIVE' | 'DELETED';

    /**
     * Function version id
     */
    functionVersionId: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Health info for a deployment specification is included only if there are any
     * issues/errors.
     */
    healthInfo?: Array<Deployment.HealthInfo>;

    /**
     * @deprecated: Deprecated Request Queue URL
     */
    requestQueueUrl?: string;
  }

  export namespace Deployment {
    /**
     * Data Transfer Object(DTO) representing GPU specification.
     */
    export interface DeploymentSpecification {
      /**
       * GPU name from the cluster
       */
      gpu: string;

      /**
       * Instance type, based on GPU, assigned to a Worker
       */
      instanceType: string;

      /**
       * Maximum number of spot instances for the deployment
       */
      maxInstances: number;

      /**
       * Minimum number of spot instances for the deployment
       */
      minInstances: number;

      /**
       * Specific attributes capabilities to deploy functions.
       */
      attributes?: Array<string>;

      /**
       * List of availability-zones(or clusters) in the cluster group
       */
      availabilityZones?: Array<string>;

      /**
       * Backend/CSP where the GPU powered instance will be launched
       */
      backend?: string;

      /**
       * Specific clusters within spot instance or worker node powered by the selected
       * instance-type to deploy function.
       */
      clusters?: Array<string>;

      configuration?: unknown;

      /**
       * Max request concurrency between 1 (default) and 1024.
       */
      maxRequestConcurrency?: number;

      /**
       * Preferred order of deployment if there are several gpu specs.
       */
      preferredOrder?: number;

      /**
       * List of regions allowed to deploy. The instance or worker node will be in one of
       * the specified geographical regions.
       */
      regions?: Array<string>;
    }

    /**
     * Data Transfer Object(DTO) representing deployment error
     */
    export interface HealthInfo {
      /**
       * Backend/CSP where the GPU powered instance will be launched
       */
      backend: string;

      /**
       * Deployment error
       */
      error: string;

      /**
       * GPU Type as per SDD
       */
      gpu: string;

      /**
       * Instance type
       */
      instanceType?: string;

      /**
       * SIS Request ID
       */
      sisRequestId?: string;
    }
  }
}

export interface VersionCreateParams {
  /**
   * Deployment specs with Backend, GPU, instance-type, etc. details
   */
  deploymentSpecifications: Array<VersionCreateParams.DeploymentSpecification>;
}

export namespace VersionCreateParams {
  /**
   * Data Transfer Object(DTO) representing GPU specification.
   */
  export interface DeploymentSpecification {
    /**
     * GPU name from the cluster
     */
    gpu: string;

    /**
     * Instance type, based on GPU, assigned to a Worker
     */
    instanceType: string;

    /**
     * Maximum number of spot instances for the deployment
     */
    maxInstances: number;

    /**
     * Minimum number of spot instances for the deployment
     */
    minInstances: number;

    /**
     * Specific attributes capabilities to deploy functions.
     */
    attributes?: Array<string>;

    /**
     * List of availability-zones(or clusters) in the cluster group
     */
    availabilityZones?: Array<string>;

    /**
     * Backend/CSP where the GPU powered instance will be launched
     */
    backend?: string;

    /**
     * Specific clusters within spot instance or worker node powered by the selected
     * instance-type to deploy function.
     */
    clusters?: Array<string>;

    configuration?: unknown;

    /**
     * Max request concurrency between 1 (default) and 1024.
     */
    maxRequestConcurrency?: number;

    /**
     * Preferred order of deployment if there are several gpu specs.
     */
    preferredOrder?: number;

    /**
     * List of regions allowed to deploy. The instance or worker node will be in one of
     * the specified geographical regions.
     */
    regions?: Array<string>;
  }
}

export interface VersionUpdateParams {
  /**
   * Deployment specs with Backend, GPU, instance-type, etc. details
   */
  deploymentSpecifications: Array<VersionUpdateParams.DeploymentSpecification>;
}

export namespace VersionUpdateParams {
  /**
   * Data Transfer Object(DTO) representing GPU specification.
   */
  export interface DeploymentSpecification {
    /**
     * GPU name from the cluster
     */
    gpu: string;

    /**
     * Instance type, based on GPU, assigned to a Worker
     */
    instanceType: string;

    /**
     * Maximum number of spot instances for the deployment
     */
    maxInstances: number;

    /**
     * Minimum number of spot instances for the deployment
     */
    minInstances: number;

    /**
     * Specific attributes capabilities to deploy functions.
     */
    attributes?: Array<string>;

    /**
     * List of availability-zones(or clusters) in the cluster group
     */
    availabilityZones?: Array<string>;

    /**
     * Backend/CSP where the GPU powered instance will be launched
     */
    backend?: string;

    /**
     * Specific clusters within spot instance or worker node powered by the selected
     * instance-type to deploy function.
     */
    clusters?: Array<string>;

    configuration?: unknown;

    /**
     * Max request concurrency between 1 (default) and 1024.
     */
    maxRequestConcurrency?: number;

    /**
     * Preferred order of deployment if there are several gpu specs.
     */
    preferredOrder?: number;

    /**
     * List of regions allowed to deploy. The instance or worker node will be in one of
     * the specified geographical regions.
     */
    regions?: Array<string>;
  }
}

export interface VersionDeleteParams {
  /**
   * Query param to deactivate function for graceful shutdown
   */
  graceful?: boolean;
}

export namespace Versions {
  export import DeploymentResponse = VersionsAPI.DeploymentResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionUpdateParams = VersionsAPI.VersionUpdateParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
}
