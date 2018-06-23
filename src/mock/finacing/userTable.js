import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.getFinacingUserTable, 'post', {
  'code': 0,
  'data': {
    'list|1-20': [{
      'id|+1': 1,
      'fullName': '@CNAME',
      'date': '@datetime',
      'username': 'zhangsan',
      'type': '@integer(0,1)'
    }]
  },
  'msg': 'success'
});

Mock.mock(ApiPath.getFinacingCompany, 'post', {
  'code': 0,
  'data': {
    'list|1-20': [{
      'id|+1': 1,
      'name': '@CNAME'
    }]
  },
  'msg': 'success'
});
