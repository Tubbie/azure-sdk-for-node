// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0/activate?api-version=2020-03-01', '*')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0\",\"name\":\"v1.0\",\"etag\":\"W/\\\"0x8D7CD3717FC2ACA\\\"\",\"properties\":{\"storageUrl\":\"https://nodesdkteststorage.blob.core.windows.net/app-my-application-id-c5fc46fb01a040c28902bfe85ca448d5/v1.0?sv=2018-03-28&sr=b&sig=ZTL6%2BuPqeAVkXmkFPbiySW7AQ%2BATlFI5iEuYcpmqT6w%3D&st=2020-03-21T01%3A23%3A00Z&se=2020-03-21T05%3A28%3A00Z&sp=rw\",\"storageUrlExpiry\":\"2020-03-21T05:28:00.5793711Z\",\"state\":\"Active\",\"format\":\"zip\",\"lastActivationTime\":\"2020-03-21T01:28:00.541501Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '722',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 21 Mar 2020 01:28:00 GMT',
  etag: 'W/"0x8D7CD3717FC2ACA"',
  'x-ms-correlation-request-id': '861f1294-3367-4eb2-8cde-37cfaa8f9771',
  'x-ms-request-id': '44a06236-7a01-4bb5-be3c-abe9c476a454',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012800Z:861f1294-3367-4eb2-8cde-37cfaa8f9771',
  date: 'Sat, 21 Mar 2020 01:27:59 GMT',
  connection: 'close' });
 return result; }]];