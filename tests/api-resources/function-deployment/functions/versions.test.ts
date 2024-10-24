// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NVCF from 'nvcf';
import { Response } from 'node-fetch';

const client = new NVCF({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.functionDeployment.functions.versions.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        deploymentSpecifications: [
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.functionDeployment.functions.versions.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        deploymentSpecifications: [
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
        ],
      },
    );
  });

  test('retrieve', async () => {
    const responsePromise = client.functionDeployment.functions.versions.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.functionDeployment.functions.versions.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NVCF.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.functionDeployment.functions.versions.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        deploymentSpecifications: [
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
          { gpu: 'gpu', instanceType: 'instanceType', maxInstances: 0, minInstances: 0 },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.functionDeployment.functions.versions.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        deploymentSpecifications: [
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
          {
            gpu: 'gpu',
            instanceType: 'instanceType',
            maxInstances: 0,
            minInstances: 0,
            attributes: ['string'],
            availabilityZones: ['string', 'string', 'string'],
            backend: 'backend',
            clusters: ['string'],
            configuration: {},
            maxRequestConcurrency: 1,
            preferredOrder: 1,
            regions: ['string'],
          },
        ],
      },
    );
  });

  test('delete', async () => {
    const responsePromise = client.functionDeployment.functions.versions.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
      client.functionDeployment.functions.versions.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NVCF.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.functionDeployment.functions.versions.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { graceful: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(NVCF.NotFoundError);
  });
});
