import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.findUserCount, 'post', {
  'retCode': 0,
  'responseDate': {
    'counts': [
      {
        'clientType': 'jfptCount',
        'count': '@integer(0,100)'
      },
      {
        'clientType': 'dsptCount',
        'count': '@integer(0,100)'
      },
      {
        'clientType': 'rbptCount',
        'count': '@integer(0,100)'
      }
    ]
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.findCustCount, 'post', {
  'retCode': 0,
  'responseDate': {
    'counts': [
      {
        'clientType': 'jfptCount',
        'count': '@integer(0,100)'
      },
      {
        'clientType': 'dsptCount',
        'count': '@integer(0,100)'
      },
      {
        'clientType': 'rbptCount',
        'count': '@integer(0,100)'
      }
    ]
  },
  'retMessage': 'success'
});
