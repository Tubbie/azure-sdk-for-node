// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2020-03-01.11.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 21 Mar 2020 02:12:17 GMT',
  etag: '0x8D7CD3D47F1B36D',
  location: 'https://test4.japaneast.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ab26dd30-9f7e-404f-999a-5ed2469dacbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test4.japaneast.batch.azure.com/jobs/job-1',
  date: 'Sat, 21 Mar 2020 02:12:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/ContainerJobNodeSDKTest/tasks?api-version=2020-03-01.11.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 21 Mar 2020 02:12:18 GMT',
  etag: '0x8D7CD3D483578D9',
  location:
   'https://test4.japaneast.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3ecf0176-21bb-4c8a-b25a-8505e97512e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  date: 'Sat, 21 Mar 2020 02:12:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .delete('/jobs/ContainerJobNodeSDKTest?api-version=2020-03-01.11.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '336149b0-0ae5-46b9-831e-4cbfb6ac3657',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:12:18 GMT',
  connection: 'close' });
 return result; }]];