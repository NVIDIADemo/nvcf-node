// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NVCF from 'nvcf';
import { Response } from 'node-fetch';

const client = new NVCF({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.functions.versions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inferenceUrl: 'https://example.com',
      name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.functions.versions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inferenceUrl: 'https://example.com',
      name: 'x',
      apiBodyFormat: 'PREDICT_V2',
      containerArgs: 'containerArgs',
      containerEnvironment: [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      containerImage: 'https://example.com',
      description: 'description',
      functionType: 'DEFAULT',
      health: {
        expectedStatusCode: 0,
        port: 0,
        protocol: 'HTTP',
        timeout: 'PT10S',
        uri: 'https://example.com',
      },
      healthUri: 'https://example.com',
      helmChart: 'https://example.com',
      helmChartServiceName: 'helmChartServiceName',
      inferencePort: 0,
      models: [{ name: 'name', uri: 'https://example.com', version: 'version' }],
      resources: [{ name: 'name', uri: 'https://example.com', version: 'version' }],
      secrets: [{ name: 'x', value: 'x' }],
      tags: ['string'],
    });
  });

  test('retrieveAll', async () => {
    const responsePromise = client.functions.versions.retrieveAll('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.functions.versions.retrieveAll('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(NVCF.NotFoundError);
  });
});
