// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NVCF from 'nvcf';
import { Response } from 'node-fetch';

const client = new NVCF({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  test('invoke: only required params', async () => {
    const responsePromise = client.functionInvocation.functions.invoke(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { body: {} },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('invoke: required and optional params', async () => {
    const response = await client.functionInvocation.functions.invoke(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { body: {}, 'NVCF-INPUT-ASSET-REFERENCES': ['string', 'string', 'string'], 'NVCF-POLL-SECONDS': 0 },
    );
  });
});