// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .delete('/pools/nodesdktestpool1?api-version=2020-03-01.11.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool has been marked for deletion and is being reclaimed.\\nRequestId:a61b13ea-6193-40dd-8dde-2439aae5bf8c\\nTime:2020-03-21T02:16:19.9692577Z\"\r\n  }\r\n}", { 'content-length': '370',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a61b13ea-6193-40dd-8dde-2439aae5bf8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:16:19 GMT',
  connection: 'close' });
 return result; }]];