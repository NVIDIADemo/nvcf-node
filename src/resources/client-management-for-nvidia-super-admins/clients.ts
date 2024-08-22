// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ClientsAPI from './clients';

export class Clients extends APIResource {
  /**
   * Gets details of the specified client.Requires a bearer token in the HTTP
   * Authorization header with 'account_setup' scope. These endpoints are invoked by
   * NVIDIA Super Admins working across accounts.
   */
  retrieve(clientId: string, options?: Core.RequestOptions): Core.APIPromise<ClientRetrieveResponse> {
    return this._client.get(`/v2/nvcf/clients/${clientId}`, options);
  }
}

/**
 * Response body for client.
 */
export interface ClientRetrieveResponse {
  /**
   * Data Transfer Object(DTO) representing a client
   */
  client: ClientRetrieveResponse.Client;
}

export namespace ClientRetrieveResponse {
  /**
   * Data Transfer Object(DTO) representing a client
   */
  export interface Client {
    /**
     * Name of the associated NVIDIA Cloud Account
     */
    name: string;

    /**
     * Associated NVIDIA Cloud Account id
     */
    ncaId: string;

    /**
     * Client Id
     */
    clientId?: string;
  }
}

export namespace Clients {
  export import ClientRetrieveResponse = ClientsAPI.ClientRetrieveResponse;
}
