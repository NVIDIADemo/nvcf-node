// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NVCF from 'nvcf';
import { Response } from 'node-fetch';

const client = new NVCF({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  test('delete', async () => {
    const responsePromise = client.nvcf.authorizations.functions.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nvcf.authorizations.functions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(NVCF.NotFoundError);
  });

  test('authorize: only required params', async () => {
    const responsePromise = client.nvcf.authorizations.functions.authorize(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { authorizedParties: [{ ncaId: 'ncaId' }, { ncaId: 'ncaId' }, { ncaId: 'ncaId' }] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('authorize: required and optional params', async () => {
    const response = await client.nvcf.authorizations.functions.authorize(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        authorizedParties: [
          { ncaId: 'ncaId', clientId: 'clientId' },
          { ncaId: 'ncaId', clientId: 'clientId' },
          { ncaId: 'ncaId', clientId: 'clientId' },
        ],
      },
    );
  });

  test('retrieveAll', async () => {
    const responsePromise = client.nvcf.authorizations.functions.retrieveAll(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nvcf.authorizations.functions.retrieveAll('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(NVCF.NotFoundError);
  });
});
