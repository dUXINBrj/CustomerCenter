import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.getFinacingUserTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'accountVoList|1-20': [{
      'custId|+1': 1,
      'loginAccount': '@CNAME',
      'companyName': '@CNAME',
      'regTime': '@datetime',
      'authTime': '@datetime',
      'firstRegPlatform': '@integer(1,3)'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getFinacingCompanyTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyVoList|1-20': [{
      'custId|+1': 1,
      'companyName': '@CNAME',
      'regDate': '@datetime',
      'authDate': '@datetime',
      'custType': '@integer(0,2)',
      'threeCertTogether': '@integer(0,1)'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getFinacingCompany, 'post', {
  'retCode': 0,
  'responseDate': {
    'companys|1-20': [{
      'custId|+1': 1,
      'companyName': '@CNAME'
    }]
  },
  'retMessage': '操作成功'
});
