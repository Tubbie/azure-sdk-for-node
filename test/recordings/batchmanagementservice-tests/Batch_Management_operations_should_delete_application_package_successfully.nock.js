// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0?api-version=2020-03-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '004822ec-559c-4a31-93ad-71796dde7372',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2bba963d-410e-44d0-9e45-47af397ea4b7',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012804Z:2bba963d-410e-44d0-9e45-47af397ea4b7',
  date: 'Sat, 21 Mar 2020 01:28:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];