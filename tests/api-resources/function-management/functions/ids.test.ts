// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NVCF from 'nvcf';
import { Response } from 'node-fetch';

const client = new NVCF({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ids', () => {
  test('retrieveAll', async () => {
    const responsePromise = client.functionManagement.functions.ids.retrieveAll();
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
      client.functionManagement.functions.ids.retrieveAll({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NVCF.NotFoundError);
  });

  test('retrieveAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.functionManagement.functions.ids.retrieveAll(
        { visibility: ['authorized'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NVCF.NotFoundError);
  });
});
