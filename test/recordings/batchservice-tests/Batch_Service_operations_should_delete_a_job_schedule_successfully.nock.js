// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .delete('/jobschedules/NodeSDKTestSchedule?api-version=2020-03-01.11.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e918bc4c-e535-4511-8739-f5f6b1b95173',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 04:36:28 GMT',
  connection: 'close' });
 return result; }]];