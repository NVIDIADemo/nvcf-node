// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Parties authorized to invoke function
 */
export interface AuthorizedPartiesResponse {
  /**
   * Data Transfer Object(DTO) representing a function with authorized accounts
   */
  function: AuthorizedPartiesResponse.Function;
}

export namespace AuthorizedPartiesResponse {
  /**
   * Data Transfer Object(DTO) representing a function with authorized accounts
   */
  export interface Function {
    /**
     * Function id
     */
    id: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Authorized parties allowed to invoke the function
     */
    authorizedParties?: Array<Function.AuthorizedParty>;

    /**
     * Function version id
     */
    versionId?: string;
  }

  export namespace Function {
    /**
     * Data Transfer Object(DTO) representing an authorized party.
     */
    export interface AuthorizedParty {
      /**
       * NVIDIA Cloud Account authorized to invoke the function
       */
      ncaId: string;

      /**
       * Client Id -- 'sub' claim in the JWT. This field should not be specified anymore.
       */
      clientId?: string;
    }
  }
}

/**
 * Response body for create function request.
 */
export interface CreateFunctionResponse {
  /**
   * Data Transfer Object (DTO) representing a function
   */
  function: CreateFunctionResponse.Function;
}

export namespace CreateFunctionResponse {
  /**
   * Data Transfer Object (DTO) representing a function
   */
  export interface Function {
    /**
     * Unique function id
     */
    id: string;

    /**
     * Function creation timestamp
     */
    createdAt: string;

    /**
     * Used to indicate a STREAMING function. Defaults to DEFAULT.
     */
    functionType: 'DEFAULT' | 'STREAMING';

    /**
     * Health endpoint for the container or helmChart
     */
    healthUri: string;

    /**
     * Function name
     */
    name: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Function status
     */
    status: 'ACTIVE' | 'DEPLOYING' | 'ERROR' | 'INACTIVE' | 'DELETED';

    /**
     * Unique function version id
     */
    versionId: string;

    /**
     * List of active instances for this function.
     */
    activeInstances?: Array<Function.ActiveInstance>;

    /**
     * Invocation request body format
     */
    apiBodyFormat?: 'PREDICT_V2' | 'CUSTOM';

    /**
     * Args used to launch the container
     */
    containerArgs?: string;

    /**
     * Environment settings used to launch the container
     */
    containerEnvironment?: Array<Function.ContainerEnvironment>;

    /**
     * Optional custom container
     */
    containerImage?: string;

    /**
     * Function/version description
     */
    description?: string;

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    health?: Function.Health;

    /**
     * Optional Helm Chart
     */
    helmChart?: string;

    /**
     * Helm Chart Service Name specified only when helmChart property is specified
     */
    helmChartServiceName?: string;

    /**
     * Optional port number where the inference listener is running - defaults to 8000
     * for Triton
     */
    inferencePort?: number;

    /**
     * Entrypoint for invoking the container to process requests
     */
    inferenceUrl?: string;

    /**
     * Optional set of models
     */
    models?: Array<Function.Model>;

    /**
     * Indicates whether the function is owned by another account. If the account that
     * is being used to lookup functions happens to be authorized to invoke/list this
     * function which is owned by a different account, then this field is set to true
     * and ncaId will contain the id of the account that owns the function. Otherwise,
     * this field is not set as it defaults to false.
     */
    ownedByDifferentAccount?: boolean;

    /**
     * Optional set of resources.
     */
    resources?: Array<Function.Resource>;

    /**
     * Optional secret names
     */
    secrets?: Array<string>;

    /**
     * Optional set of tags. Maximum allowed number of tags per function is 64. Maximum
     * length of each tag is 128 chars.
     */
    tags?: Array<string>;
  }

  export namespace Function {
    /**
     * Data Transfer Object(DTO) representing a spot instance
     */
    export interface ActiveInstance {
      /**
       * Backend where the instance is running
       */
      backend?: string;

      /**
       * Function executing on the instance
       */
      functionId?: string;

      /**
       * Function version executing on the instance
       */
      functionVersionId?: string;

      /**
       * GPU name powering the instance
       */
      gpu?: string;

      /**
       * Instance creation timestamp
       */
      instanceCreatedAt?: string;

      /**
       * Unique id of the instance
       */
      instanceId?: string;

      /**
       * Instance status
       */
      instanceStatus?: 'ACTIVE' | 'ERRORED' | 'PREEMPTED' | 'DELETED';

      /**
       * GPU instance-type powering the instance
       */
      instanceType?: string;

      /**
       * Instance's last updated timestamp
       */
      instanceUpdatedAt?: string;

      /**
       * Location such as zone name or region where the instance is running
       */
      location?: string;

      /**
       * NVIDIA Cloud Account Id that owns the function running on the instance
       */
      ncaId?: string;

      /**
       * SIS request-id used to launch this instance
       */
      sisRequestId?: string;
    }

    /**
     * Data Transfer Object(DTO) representing a container environment entry
     */
    export interface ContainerEnvironment {
      /**
       * Container environment key
       */
      key: string;

      /**
       * Container environment value
       */
      value: string;
    }

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    export interface Health {
      /**
       * Expected return status code considered as successful.
       */
      expectedStatusCode: number;

      /**
       * Port number where the health listener is running
       */
      port: number;

      /**
       * HTTP/gPRC protocol type for health endpoint
       */
      protocol: 'HTTP' | 'gRPC';

      /**
       * ISO 8601 duration string in PnDTnHnMn.nS format
       */
      timeout: string;

      /**
       * Health endpoint for the container or the helmChart
       */
      uri: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Model {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Resource {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }
  }
}

/**
 * Response body with function details
 */
export interface FunctionResponse {
  /**
   * Data Transfer Object (DTO) representing a function
   */
  function: FunctionResponse.Function;
}

export namespace FunctionResponse {
  /**
   * Data Transfer Object (DTO) representing a function
   */
  export interface Function {
    /**
     * Unique function id
     */
    id: string;

    /**
     * Function creation timestamp
     */
    createdAt: string;

    /**
     * Used to indicate a STREAMING function. Defaults to DEFAULT.
     */
    functionType: 'DEFAULT' | 'STREAMING';

    /**
     * Health endpoint for the container or helmChart
     */
    healthUri: string;

    /**
     * Function name
     */
    name: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Function status
     */
    status: 'ACTIVE' | 'DEPLOYING' | 'ERROR' | 'INACTIVE' | 'DELETED';

    /**
     * Unique function version id
     */
    versionId: string;

    /**
     * List of active instances for this function.
     */
    activeInstances?: Array<Function.ActiveInstance>;

    /**
     * Invocation request body format
     */
    apiBodyFormat?: 'PREDICT_V2' | 'CUSTOM';

    /**
     * Args used to launch the container
     */
    containerArgs?: string;

    /**
     * Environment settings used to launch the container
     */
    containerEnvironment?: Array<Function.ContainerEnvironment>;

    /**
     * Optional custom container
     */
    containerImage?: string;

    /**
     * Function/version description
     */
    description?: string;

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    health?: Function.Health;

    /**
     * Optional Helm Chart
     */
    helmChart?: string;

    /**
     * Helm Chart Service Name specified only when helmChart property is specified
     */
    helmChartServiceName?: string;

    /**
     * Optional port number where the inference listener is running - defaults to 8000
     * for Triton
     */
    inferencePort?: number;

    /**
     * Entrypoint for invoking the container to process requests
     */
    inferenceUrl?: string;

    /**
     * Optional set of models
     */
    models?: Array<Function.Model>;

    /**
     * Indicates whether the function is owned by another account. If the account that
     * is being used to lookup functions happens to be authorized to invoke/list this
     * function which is owned by a different account, then this field is set to true
     * and ncaId will contain the id of the account that owns the function. Otherwise,
     * this field is not set as it defaults to false.
     */
    ownedByDifferentAccount?: boolean;

    /**
     * Optional set of resources.
     */
    resources?: Array<Function.Resource>;

    /**
     * Optional secret names
     */
    secrets?: Array<string>;

    /**
     * Optional set of tags. Maximum allowed number of tags per function is 64. Maximum
     * length of each tag is 128 chars.
     */
    tags?: Array<string>;
  }

  export namespace Function {
    /**
     * Data Transfer Object(DTO) representing a spot instance
     */
    export interface ActiveInstance {
      /**
       * Backend where the instance is running
       */
      backend?: string;

      /**
       * Function executing on the instance
       */
      functionId?: string;

      /**
       * Function version executing on the instance
       */
      functionVersionId?: string;

      /**
       * GPU name powering the instance
       */
      gpu?: string;

      /**
       * Instance creation timestamp
       */
      instanceCreatedAt?: string;

      /**
       * Unique id of the instance
       */
      instanceId?: string;

      /**
       * Instance status
       */
      instanceStatus?: 'ACTIVE' | 'ERRORED' | 'PREEMPTED' | 'DELETED';

      /**
       * GPU instance-type powering the instance
       */
      instanceType?: string;

      /**
       * Instance's last updated timestamp
       */
      instanceUpdatedAt?: string;

      /**
       * Location such as zone name or region where the instance is running
       */
      location?: string;

      /**
       * NVIDIA Cloud Account Id that owns the function running on the instance
       */
      ncaId?: string;

      /**
       * SIS request-id used to launch this instance
       */
      sisRequestId?: string;
    }

    /**
     * Data Transfer Object(DTO) representing a container environment entry
     */
    export interface ContainerEnvironment {
      /**
       * Container environment key
       */
      key: string;

      /**
       * Container environment value
       */
      value: string;
    }

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    export interface Health {
      /**
       * Expected return status code considered as successful.
       */
      expectedStatusCode: number;

      /**
       * Port number where the health listener is running
       */
      port: number;

      /**
       * HTTP/gPRC protocol type for health endpoint
       */
      protocol: 'HTTP' | 'gRPC';

      /**
       * ISO 8601 duration string in PnDTnHnMn.nS format
       */
      timeout: string;

      /**
       * Health endpoint for the container or the helmChart
       */
      uri: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Model {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Resource {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }
  }
}

/**
 * Request queue details of all the functions with same id in an account
 */
export interface GetQueuesResponse {
  /**
   * Function id
   */
  functionId: string;

  /**
   * Details of all the queues associated with same named functions
   */
  queues: Array<GetQueuesResponse.Queue>;
}

export namespace GetQueuesResponse {
  /**
   * Data Transfer Object(DTO) representing a request queue for function version
   */
  export interface Queue {
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
     * Approximate number of messages in the request queue
     */
    queueDepth?: number;
  }
}

/**
 * Response body with result from a request for executing a job/task as a cloud
 * function using a GPU powered spot/on-demand instance.
 */
export interface InvokeFunctionResponse {
  /**
   * Error code from the container while executing cloud function.
   */
  errorCode?: number;

  /**
   * Progress indicator for the task/job executing cloud function.
   */
  percentComplete?: number;

  /**
   * Request id
   */
  reqId?: string;

  /**
   * Response/result of size < 5MB size for the task/job executing cloud function.
   */
  response?: string;

  /**
   * For large results, responseReference will be a pre-signeddownload URL.
   */
  responseReference?: string;

  /**
   * Status of the task/job executing cloud function.
   */
  status?: 'errored' | 'in-progress' | 'fulfilled' | 'pending-evaluation' | 'rejected';
}

/**
 * Response body containing list of functions
 */
export interface ListFunctionsResponse {
  /**
   * List of functions
   */
  functions: Array<ListFunctionsResponse.Function>;
}

export namespace ListFunctionsResponse {
  /**
   * Data Transfer Object (DTO) representing a function
   */
  export interface Function {
    /**
     * Unique function id
     */
    id: string;

    /**
     * Function creation timestamp
     */
    createdAt: string;

    /**
     * Used to indicate a STREAMING function. Defaults to DEFAULT.
     */
    functionType: 'DEFAULT' | 'STREAMING';

    /**
     * Health endpoint for the container or helmChart
     */
    healthUri: string;

    /**
     * Function name
     */
    name: string;

    /**
     * NVIDIA Cloud Account Id
     */
    ncaId: string;

    /**
     * Function status
     */
    status: 'ACTIVE' | 'DEPLOYING' | 'ERROR' | 'INACTIVE' | 'DELETED';

    /**
     * Unique function version id
     */
    versionId: string;

    /**
     * List of active instances for this function.
     */
    activeInstances?: Array<Function.ActiveInstance>;

    /**
     * Invocation request body format
     */
    apiBodyFormat?: 'PREDICT_V2' | 'CUSTOM';

    /**
     * Args used to launch the container
     */
    containerArgs?: string;

    /**
     * Environment settings used to launch the container
     */
    containerEnvironment?: Array<Function.ContainerEnvironment>;

    /**
     * Optional custom container
     */
    containerImage?: string;

    /**
     * Function/version description
     */
    description?: string;

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    health?: Function.Health;

    /**
     * Optional Helm Chart
     */
    helmChart?: string;

    /**
     * Helm Chart Service Name specified only when helmChart property is specified
     */
    helmChartServiceName?: string;

    /**
     * Optional port number where the inference listener is running - defaults to 8000
     * for Triton
     */
    inferencePort?: number;

    /**
     * Entrypoint for invoking the container to process requests
     */
    inferenceUrl?: string;

    /**
     * Optional set of models
     */
    models?: Array<Function.Model>;

    /**
     * Indicates whether the function is owned by another account. If the account that
     * is being used to lookup functions happens to be authorized to invoke/list this
     * function which is owned by a different account, then this field is set to true
     * and ncaId will contain the id of the account that owns the function. Otherwise,
     * this field is not set as it defaults to false.
     */
    ownedByDifferentAccount?: boolean;

    /**
     * Optional set of resources.
     */
    resources?: Array<Function.Resource>;

    /**
     * Optional secret names
     */
    secrets?: Array<string>;

    /**
     * Optional set of tags. Maximum allowed number of tags per function is 64. Maximum
     * length of each tag is 128 chars.
     */
    tags?: Array<string>;
  }

  export namespace Function {
    /**
     * Data Transfer Object(DTO) representing a spot instance
     */
    export interface ActiveInstance {
      /**
       * Backend where the instance is running
       */
      backend?: string;

      /**
       * Function executing on the instance
       */
      functionId?: string;

      /**
       * Function version executing on the instance
       */
      functionVersionId?: string;

      /**
       * GPU name powering the instance
       */
      gpu?: string;

      /**
       * Instance creation timestamp
       */
      instanceCreatedAt?: string;

      /**
       * Unique id of the instance
       */
      instanceId?: string;

      /**
       * Instance status
       */
      instanceStatus?: 'ACTIVE' | 'ERRORED' | 'PREEMPTED' | 'DELETED';

      /**
       * GPU instance-type powering the instance
       */
      instanceType?: string;

      /**
       * Instance's last updated timestamp
       */
      instanceUpdatedAt?: string;

      /**
       * Location such as zone name or region where the instance is running
       */
      location?: string;

      /**
       * NVIDIA Cloud Account Id that owns the function running on the instance
       */
      ncaId?: string;

      /**
       * SIS request-id used to launch this instance
       */
      sisRequestId?: string;
    }

    /**
     * Data Transfer Object(DTO) representing a container environment entry
     */
    export interface ContainerEnvironment {
      /**
       * Container environment key
       */
      key: string;

      /**
       * Container environment value
       */
      value: string;
    }

    /**
     * Data Transfer Object(DTO) representing a function ne
     */
    export interface Health {
      /**
       * Expected return status code considered as successful.
       */
      expectedStatusCode: number;

      /**
       * Port number where the health listener is running
       */
      port: number;

      /**
       * HTTP/gPRC protocol type for health endpoint
       */
      protocol: 'HTTP' | 'gRPC';

      /**
       * ISO 8601 duration string in PnDTnHnMn.nS format
       */
      timeout: string;

      /**
       * Health endpoint for the container or the helmChart
       */
      uri: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Model {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }

    /**
     * Data Transfer Object(DTO) representing an artifact
     */
    export interface Resource {
      /**
       * Artifact name
       */
      name: string;

      /**
       * Artifact URI
       */
      uri: string;

      /**
       * Artifact version
       */
      version: string;
    }
  }
}
