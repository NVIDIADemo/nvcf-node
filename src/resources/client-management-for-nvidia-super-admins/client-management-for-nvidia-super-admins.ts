// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClientsAPI from './clients';

export class ClientManagementForNVIDIASuperAdmins extends APIResource {
  clients: ClientsAPI.Clients = new ClientsAPI.Clients(this._client);
}

export namespace ClientManagementForNVIDIASuperAdmins {
  export import Clients = ClientsAPI.Clients;
  export import ClientRetrieveResponse = ClientsAPI.ClientRetrieveResponse;
}
