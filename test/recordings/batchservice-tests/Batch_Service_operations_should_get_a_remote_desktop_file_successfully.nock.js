// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvmps_629912ea6ac7432abe90f0dde1dd3071b1141a76f5de918abc24ffb884842d38_d/rdp?api-version=2020-03-01.11.0')
  .reply(200, "full address:s:52.246.163.218\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_0", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '30449d66-7e9b-47a1-90a2-4ea95b496e95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:12:04 GMT',
  connection: 'close' });
 return result; }]];