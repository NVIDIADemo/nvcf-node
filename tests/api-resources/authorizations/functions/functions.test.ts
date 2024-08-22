// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NvidiaCloudFunctions from 'nvidia-cloud-functions';
import { Response } from 'node-fetch';

const client = new NvidiaCloudFunctions({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  test('add: only required params', async () => {
    const responsePromise = client.authorizations.functions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      authorizedParty: { ncaId: 'ncaId' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.authorizations.functions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      authorizedParty: { ncaId: 'ncaId', clientId: 'clientId' },
    });
  });

  test('remove: only required params', async () => {
    const responsePromise = client.authorizations.functions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      authorizedParty: { ncaId: 'ncaId' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: required and optional params', async () => {
    const response = await client.authorizations.functions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      authorizedParty: { ncaId: 'ncaId', clientId: 'clientId' },
    });
  });
});
