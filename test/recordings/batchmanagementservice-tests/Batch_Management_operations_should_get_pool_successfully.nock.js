// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2020-03-01')
  .reply(200, "{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool\",\"name\":\"test_iaas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D7CD375E4E4D89\\\"\",\"properties\":{\"lastModified\":\"2020-03-21T01:29:58.5299849Z\",\"creationTime\":\"2020-03-21T01:29:58.5299849Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2020-03-21T01:29:58.5299849Z\",\"allocationState\":\"Steady\",\"allocationStateTransitionTime\":\"2020-03-21T01:29:58.9149996Z\",\"vmSize\":\"STANDARD_A1\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"},\"nodeAgentSkuId\":\"batch.node.windows amd64\",\"windowsConfiguration\":{\"enableAutomaticUpdates\":true}}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":\"Requeue\",\"resizeTimeout\":\"PT15M\",\"startTime\":\"2020-03-21T01:29:58.5299849Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1314',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 21 Mar 2020 01:29:58 GMT',
  etag: 'W/"0x8D7CD375E4E4D89"',
  'x-ms-correlation-request-id': 'ba67b3e1-d7dc-4787-a885-51a0c3e7e915',
  'x-ms-request-id': '0a22a782-8e2c-4743-9389-c01e524e468d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T013001Z:ba67b3e1-d7dc-4787-a885-51a0c3e7e915',
  date: 'Sat, 21 Mar 2020 01:30:00 GMT',
  connection: 'close' });
 return result; }]];