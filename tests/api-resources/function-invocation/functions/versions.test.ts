// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NvidiaCloudFunctions from 'nvidia-cloud-functions';
import { Response } from 'node-fetch';

const client = new NvidiaCloudFunctions({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  test('invoke: only required params', async () => {
    const responsePromise = client.functionInvocation.functions.versions.invoke(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.functionInvocation.functions.versions.invoke(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { body: {}, 'NVCF-INPUT-ASSET-REFERENCES': ['string', 'string', 'string'], 'NVCF-POLL-SECONDS': 0 },
    );
  });
});
