import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.getECommerceUserTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'accountVoList|1-20': [{
      'custId|+1': 1,
      'loginAccount': '@CNAME',
      'companyName': '@CNAME',
      'regDate': '@datetime',
      'operTime': '@datetime',
      'userState': '@integer(0,1)',
      'userType': '@integer(0,1)',
      'userAccountType': '@integer(0,1)',
      'lockedFlag': '@integer(0,1)',
      'firstRegPlatform': '@integer(1,3)'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getECommerceCompanyTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyVoList|1-20': [{
      'custId|+1': 1,
      'areaInfos': '@CNAME',
      'companyName': '@CNAME',
      'regDate': '@datetime',
      'authDate': '@datetime',
      'userState': '@integer(0,1)',
      'userType': '@integer(0,1)',
      'userAccountType': '@integer(0,1)',
      'lockedFlag': '@integer(0,1)',
      'firstRegPlatform': '@integer(1,3)'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getCompanyCusStatu, 'post', {
  'retCode': 0,
  'responseDate': {
    'custStatus': {
      '待审核': '0',
      '审核通过': '1',
      '审核不通过': '2',
      '注销': '3',
      '资料被保存': '4',
      '申请注销': '5',
      '资料未填写': '6',
      '删除': '7'
    }
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getCompanyAuthstatus, 'post', {
  'retCode': 0,
  'responseDate': {
    'infoAuthStatus': {
      '未认证': '0',
      '认证通过': '1',
      '认证不通过': '2',
      '重新认证': '3',
      '资料未填写': '4'
    }
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getAreaCity, 'post', {
  'retCode': 0,
  'responseDate': {
    'areaInfos|10-20': ['@CNAME']
  },
  'retMessage': 'success'
});
