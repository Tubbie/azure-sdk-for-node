// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D3510B363835D5\",\"lastModified\":\"2016-03-20T22:01:38.5515477Z\",\"creationTime\":\"2016-03-20T21:54:43.3925787Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:43.3925787Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:38.5515477Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"currentOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT1H\",\"currentDedicated\":2,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools?api-version=2015-12-01.2.2&maxresults=1&$skiptoken=WATV2:JCWMIA7CbEt4X6AzP3YjLU/56Lt2Wgg0dg8L/WTS8jdcT9lardce/nH%5EvZof1onL1LF0pI/t3OFZHVz6nB5fjgM2AKWD3XaqBwknHvE6qEAfKr%5EGNyTeDfllkZaZ41rwQ1QCuBqB2yYNB4JfcQpiMon6FKuPGmtIkiWP52o9ZxAel1eZAOjidGixK2HhUPH02mEeD5jnT%5ETCQoXIiLqiiL2I8X47BfUiINEtVp3u9g4uMLb9ZTm6cAS14wW8AU1nhSoIc3CXji6vhBD3kwrYguijY9qRlu6oDx2N0Jh2fp4=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6e7ba5c4-a342-4e14-9168-3aeb4e219dfa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D3510B363835D5\",\"lastModified\":\"2016-03-20T22:01:38.5515477Z\",\"creationTime\":\"2016-03-20T21:54:43.3925787Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T21:54:43.3925787Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:38.5515477Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"currentOSVersion\":\"WA-GUEST-OS-4.27_201512-01\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT1H\",\"currentDedicated\":2,\"targetDedicated\":2,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools?api-version=2015-12-01.2.2&maxresults=1&$skiptoken=WATV2:JCWMIA7CbEt4X6AzP3YjLU/56Lt2Wgg0dg8L/WTS8jdcT9lardce/nH%5EvZof1onL1LF0pI/t3OFZHVz6nB5fjgM2AKWD3XaqBwknHvE6qEAfKr%5EGNyTeDfllkZaZ41rwQ1QCuBqB2yYNB4JfcQpiMon6FKuPGmtIkiWP52o9ZxAel1eZAOjidGixK2HhUPH02mEeD5jnT%5ETCQoXIiLqiiL2I8X47BfUiINEtVp3u9g4uMLb9ZTm6cAS14wW8AU1nhSoIc3CXji6vhBD3kwrYguijY9qRlu6oDx2N0Jh2fp4=:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6e7ba5c4-a342-4e14-9168-3aeb4e219dfa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2&maxresults=1&$skiptoken=WATV2:JCWMIA7CbEt4X6AzP3YjLU/56Lt2Wgg0dg8L/WTS8jdcT9lardce/nH%5EvZof1onL1LF0pI/t3OFZHVz6nB5fjgM2AKWD3XaqBwknHvE6qEAfKr%5EGNyTeDfllkZaZ41rwQ1QCuBqB2yYNB4JfcQpiMon6FKuPGmtIkiWP52o9ZxAel1eZAOjidGixK2HhUPH02mEeD5jnT%5ETCQoXIiLqiiL2I8X47BfUiINEtVp3u9g4uMLb9ZTm6cAS14wW8AU1nhSoIc3CXji6vhBD3kwrYguijY9qRlu6oDx2N0Jh2fp4=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D3510B3683DF80\",\"lastModified\":\"2016-03-20T22:01:39.0474112Z\",\"creationTime\":\"2016-03-20T22:01:39.0474112Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:39.0474112Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:39.1523933Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8d18a47e-3766-44a1-a371-3e181e772d4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools?api-version=2015-12-01.2.2&maxresults=1&$skiptoken=WATV2:JCWMIA7CbEt4X6AzP3YjLU/56Lt2Wgg0dg8L/WTS8jdcT9lardce/nH%5EvZof1onL1LF0pI/t3OFZHVz6nB5fjgM2AKWD3XaqBwknHvE6qEAfKr%5EGNyTeDfllkZaZ41rwQ1QCuBqB2yYNB4JfcQpiMon6FKuPGmtIkiWP52o9ZxAel1eZAOjidGixK2HhUPH02mEeD5jnT%5ETCQoXIiLqiiL2I8X47BfUiINEtVp3u9g4uMLb9ZTm6cAS14wW8AU1nhSoIc3CXji6vhBD3kwrYguijY9qRlu6oDx2N0Jh2fp4=:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool2\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool2\",\"eTag\":\"0x8D3510B3683DF80\",\"lastModified\":\"2016-03-20T22:01:39.0474112Z\",\"creationTime\":\"2016-03-20T22:01:39.0474112Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:39.0474112Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-03-20T22:01:39.1523933Z\",\"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8d18a47e-3766-44a1-a371-3e181e772d4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:01:40 GMT',
  connection: 'close' });
 return result; }]];