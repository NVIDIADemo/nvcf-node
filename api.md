# Shared

Types:

- <code><a href="./src/resources/shared.ts">AuthorizedPartiesResponse</a></code>
- <code><a href="./src/resources/shared.ts">CreateFunctionResponse</a></code>
- <code><a href="./src/resources/shared.ts">FunctionResponse</a></code>
- <code><a href="./src/resources/shared.ts">GetQueuesResponse</a></code>
- <code><a href="./src/resources/shared.ts">InvokeFunctionResponse</a></code>
- <code><a href="./src/resources/shared.ts">ListFunctionsResponse</a></code>

# UserSecretManagement

## Functions

### Versions

Methods:

- <code title="put /v2/nvcf/secrets/functions/{functionId}/versions/{versionId}">client.userSecretManagement.functions.versions.<a href="./src/resources/user-secret-management/functions/versions.ts">update</a>(functionId, versionId, { ...params }) -> void</code>

# FunctionManagement

## Functions

### Versions

Methods:

- <code title="get /v2/nvcf/functions/{functionId}/versions/{functionVersionId}">client.functionManagement.functions.versions.<a href="./src/resources/function-management/functions/versions.ts">retrieve</a>(functionId, functionVersionId) -> FunctionResponse</code>
- <code title="put /v2/nvcf/metadata/functions/{functionId}/versions/{functionVersionId}">client.functionManagement.functions.versions.<a href="./src/resources/function-management/functions/versions.ts">update</a>(functionId, functionVersionId, { ...params }) -> FunctionResponse</code>
- <code title="delete /v2/nvcf/functions/{functionId}/versions/{functionVersionId}">client.functionManagement.functions.versions.<a href="./src/resources/function-management/functions/versions.ts">delete</a>(functionId, functionVersionId) -> void</code>

### IDs

Types:

- <code><a href="./src/resources/function-management/functions/ids.ts">ListFunctionIDsResponse</a></code>

Methods:

- <code title="get /v2/nvcf/functions/ids">client.functionManagement.functions.ids.<a href="./src/resources/function-management/functions/ids.ts">list</a>({ ...params }) -> ListFunctionIDsResponse</code>

# FunctionDeployment

## Functions

### Versions

Types:

- <code><a href="./src/resources/function-deployment/functions/versions.ts">DeploymentResponse</a></code>

Methods:

- <code title="post /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}">client.functionDeployment.functions.versions.<a href="./src/resources/function-deployment/functions/versions.ts">create</a>(functionId, functionVersionId, { ...params }) -> DeploymentResponse</code>
- <code title="get /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}">client.functionDeployment.functions.versions.<a href="./src/resources/function-deployment/functions/versions.ts">retrieve</a>(functionId, functionVersionId) -> DeploymentResponse</code>
- <code title="put /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}">client.functionDeployment.functions.versions.<a href="./src/resources/function-deployment/functions/versions.ts">update</a>(functionId, functionVersionId, { ...params }) -> DeploymentResponse</code>
- <code title="delete /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}">client.functionDeployment.functions.versions.<a href="./src/resources/function-deployment/functions/versions.ts">delete</a>(functionId, functionVersionId, { ...params }) -> FunctionResponse</code>

# FunctionInvocation

## Functions

Types:

- <code><a href="./src/resources/function-invocation/functions/functions.ts">FunctionInvokeResponse</a></code>

Methods:

- <code title="post /v2/nvcf/pexec/functions/{functionId}">client.functionInvocation.functions.<a href="./src/resources/function-invocation/functions/functions.ts">invoke</a>(functionId, { ...params }) -> FunctionInvokeResponse</code>

### Versions

Types:

- <code><a href="./src/resources/function-invocation/functions/versions.ts">VersionInvokeResponse</a></code>

Methods:

- <code title="post /v2/nvcf/pexec/functions/{functionId}/versions/{versionId}">client.functionInvocation.functions.versions.<a href="./src/resources/function-invocation/functions/versions.ts">invoke</a>(functionId, versionId, { ...params }) -> VersionInvokeResponse</code>

# EnvelopeFunctionInvocation

## Functions

Methods:

- <code title="post /v2/nvcf/exec/functions/{functionId}">client.envelopeFunctionInvocation.functions.<a href="./src/resources/envelope-function-invocation/functions/functions.ts">invoke</a>(functionId, { ...params }) -> InvokeFunctionResponse</code>

### Versions

Methods:

- <code title="post /v2/nvcf/exec/functions/{functionId}/versions/{versionId}">client.envelopeFunctionInvocation.functions.versions.<a href="./src/resources/envelope-function-invocation/functions/versions.ts">invoke</a>(functionId, versionId, { ...params }) -> InvokeFunctionResponse</code>

## Exec

### Status

Methods:

- <code title="get /v2/nvcf/exec/status/{requestId}">client.envelopeFunctionInvocation.exec.status.<a href="./src/resources/envelope-function-invocation/exec/status.ts">retrieve</a>(requestId) -> InvokeFunctionResponse</code>

# Nvcf

## Functions

Methods:

- <code title="post /v2/nvcf/functions">client.nvcf.functions.<a href="./src/resources/nvcf/functions/functions.ts">create</a>({ ...params }) -> CreateFunctionResponse</code>
- <code title="get /v2/nvcf/functions">client.nvcf.functions.<a href="./src/resources/nvcf/functions/functions.ts">list</a>({ ...params }) -> ListFunctionsResponse</code>

### Versions

Methods:

- <code title="post /v2/nvcf/functions/{functionId}/versions">client.nvcf.functions.versions.<a href="./src/resources/nvcf/functions/versions.ts">create</a>(functionId, { ...params }) -> CreateFunctionResponse</code>
- <code title="get /v2/nvcf/functions/{functionId}/versions">client.nvcf.functions.versions.<a href="./src/resources/nvcf/functions/versions.ts">list</a>(functionId) -> ListFunctionsResponse</code>

## Authorizations

### Functions

Types:

- <code><a href="./src/resources/nvcf/authorizations/functions/functions.ts">ListAuthorizedPartiesResponse</a></code>

Methods:

- <code title="get /v2/nvcf/authorizations/functions/{functionId}">client.nvcf.authorizations.functions.<a href="./src/resources/nvcf/authorizations/functions/functions.ts">list</a>(functionId) -> ListAuthorizedPartiesResponse</code>
- <code title="delete /v2/nvcf/authorizations/functions/{functionId}">client.nvcf.authorizations.functions.<a href="./src/resources/nvcf/authorizations/functions/functions.ts">delete</a>(functionId) -> AuthorizedPartiesResponse</code>
- <code title="post /v2/nvcf/authorizations/functions/{functionId}">client.nvcf.authorizations.functions.<a href="./src/resources/nvcf/authorizations/functions/functions.ts">authorize</a>(functionId, { ...params }) -> AuthorizedPartiesResponse</code>

#### Versions

Methods:

- <code title="get /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}">client.nvcf.authorizations.functions.versions.<a href="./src/resources/nvcf/authorizations/functions/versions.ts">retrieve</a>(functionId, functionVersionId) -> AuthorizedPartiesResponse</code>
- <code title="delete /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}">client.nvcf.authorizations.functions.versions.<a href="./src/resources/nvcf/authorizations/functions/versions.ts">delete</a>(functionId, functionVersionId) -> AuthorizedPartiesResponse</code>
- <code title="post /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}">client.nvcf.authorizations.functions.versions.<a href="./src/resources/nvcf/authorizations/functions/versions.ts">authorize</a>(functionId, functionVersionId, { ...params }) -> AuthorizedPartiesResponse</code>

# Assets

Types:

- <code><a href="./src/resources/assets.ts">CreateAssetResponse</a></code>
- <code><a href="./src/resources/assets.ts">ListAssetsResponse</a></code>

Methods:

- <code title="post /v2/nvcf/assets">client.assets.<a href="./src/resources/assets.ts">create</a>({ ...params }) -> CreateAssetResponse</code>
- <code title="get /v2/nvcf/assets">client.assets.<a href="./src/resources/assets.ts">list</a>() -> ListAssetsResponse</code>

# Authorizations

## Functions

Methods:

- <code title="patch /v2/nvcf/authorizations/functions/{functionId}/add">client.authorizations.functions.<a href="./src/resources/authorizations/functions/functions.ts">add</a>(functionId, { ...params }) -> AuthorizedPartiesResponse</code>
- <code title="patch /v2/nvcf/authorizations/functions/{functionId}/remove">client.authorizations.functions.<a href="./src/resources/authorizations/functions/functions.ts">remove</a>(functionId, { ...params }) -> AuthorizedPartiesResponse</code>

### Versions

Methods:

- <code title="patch /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/add">client.authorizations.functions.versions.<a href="./src/resources/authorizations/functions/versions.ts">add</a>(functionId, functionVersionId, { ...params }) -> AuthorizedPartiesResponse</code>
- <code title="patch /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/remove">client.authorizations.functions.versions.<a href="./src/resources/authorizations/functions/versions.ts">remove</a>(functionId, functionVersionId, { ...params }) -> AuthorizedPartiesResponse</code>

# Queues

## Functions

Methods:

- <code title="get /v2/nvcf/queues/functions/{functionId}">client.queues.functions.<a href="./src/resources/queues/functions/functions.ts">list</a>(functionId) -> GetQueuesResponse</code>

### Versions

Methods:

- <code title="get /v2/nvcf/queues/functions/{functionId}/versions/{versionId}">client.queues.functions.versions.<a href="./src/resources/queues/functions/versions.ts">list</a>(functionId, versionId) -> GetQueuesResponse</code>

## Position

Types:

- <code><a href="./src/resources/queues/position.ts">GetPositionInQueueResponse</a></code>

Methods:

- <code title="get /v2/nvcf/queues/{requestId}/position">client.queues.position.<a href="./src/resources/queues/position.ts">retrieve</a>(requestId) -> GetPositionInQueueResponse</code>

# Pexec

## Status

Types:

- <code><a href="./src/resources/pexec/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /v2/nvcf/pexec/status/{requestId}">client.pexec.status.<a href="./src/resources/pexec/status.ts">retrieve</a>(requestId, { ...params }) -> StatusRetrieveResponse</code>

# ClusterGroupsAndGPUs

## ClusterGroups

Types:

- <code><a href="./src/resources/cluster-groups-and-gpus/cluster-groups.ts">ClusterGroupsResponse</a></code>

Methods:

- <code title="get /v2/nvcf/clusterGroups">client.clusterGroupsAndGPUs.clusterGroups.<a href="./src/resources/cluster-groups-and-gpus/cluster-groups.ts">list</a>() -> ClusterGroupsResponse</code>

# ClientManagementForNvidiaSuperAdmins

## Clients

Types:

- <code><a href="./src/resources/client-management-for-nvidia-super-admins/clients.ts">ClientRetrieveResponse</a></code>

Methods:

- <code title="get /v2/nvcf/clients/{clientId}">client.clientManagementForNvidiaSuperAdmins.clients.<a href="./src/resources/client-management-for-nvidia-super-admins/clients.ts">retrieve</a>(clientId) -> ClientRetrieveResponse</code>

# AssetManagement

## Assets

Types:

- <code><a href="./src/resources/asset-management/assets.ts">AssetResponse</a></code>

Methods:

- <code title="get /v2/nvcf/assets/{assetId}">client.assetManagement.assets.<a href="./src/resources/asset-management/assets.ts">retrieve</a>(assetId) -> AssetResponse</code>
- <code title="delete /v2/nvcf/assets/{assetId}">client.assetManagement.assets.<a href="./src/resources/asset-management/assets.ts">delete</a>(assetId) -> void</code>
