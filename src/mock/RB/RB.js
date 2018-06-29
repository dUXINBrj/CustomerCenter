import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.getFinacingCompany + '?clientType=3', 'post', {
  'retCode': '0',
  'responseDate': {
    'companys|1-20': [{
      'custId|+1': 1,
      'companyName': '@CNAME'
    }]
  },
  'retMessage': '操作成功'
});

Mock.mock(ApiPath.getRbUserTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'accountVoList|1-20': [{
      'custId|+1': 1,
      'companyId': '@integer(100000000000000000,999999999999999999)',
      'loginAccount': '@CNAME',
      'companyName': '@CNAME',
      'userCode': '600988272',
      'cellPhone': '13545645645',
      'email': '@email'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getRbCompanyTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyVoList|1-20': [{
      'custId': 100000000000528,
      'companyId': '@integer(100000000000000000,999999999999999999)',
      'companyName': '@CNAME',
      'industrytypeName': '@cparagraph(1)',
      'address': '@county(true)',
      'companyLeander': '@CNAME',
      'email': '@email'
    }],
    'totalCount': '@integer(50,100)'
  },
  'retMessage': 'success'
});

Mock.mock(ApiPath.getRbCompanyDetail, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyDetailVo': {
      'companyName': '@CNAME',
      'address': '@county(true)',
      'companyType': '@cparagraph(1)', // 商户类型
      'industrytype': '@cparagraph(1)', // 行业类型
      'legalPerson': '@CNAME', // 企业法人
      'legalpersonIdcard': '@integer(100000000000000000,999999999999999999)', // 企业法人身份证
      'legalpersonPhone': '@integer(10000000000,19999999999)', // 企业法人手机号
      'companyleander': '@CNAME', // 负责人
      'companyleanderphone': '@integer(10000000000,19999999999)', // 负责人手机号
      'provinceName': '@province()', // 省名称
      'cityName': '@city( prefix )', // 市名称
      'areaName': '@county( prefix )', // 区
      'unifiedSocialInformationCode': '@integer( 10000000, 99999999999 )', // 统一社会信息代码
      'email': '@email',
      'remark': '@cparagraph(1,3)',
      'attachVos|0-20': [
        {
          'certificatetypeName': '@CNAME',
          'certificateContent': 'A7YA0PZPIWQN%`VMPNUBX5C.png',
          'certificatePath': '/jf/test/register/2/20180524152012.png'
        }
      ],
      'bankAccountVos|1-10': [{
        'accountType': '@integer(0,1)', // 0公账 1私账
        'accountName': '@name',
        'bankAccount': '@integer( 1000000000000, 9999999999999 )',
        'bank': '@name',
        'bankCode': '@integer( 1000000000000, 9999999999999 )',
        'idcardNo': '@integer( 1000000000000, 9999999999999 )',
        'mobilePhone': '@integer( 1000000000000, 9999999999999 )'
      }],
      'companyAccountVo|1-10': [
        {
          'loginName': '@Cname',
          'cellPhone': '@integer( 1000000000000, 9999999999999 )',
          'userCode': '@integer( 1000000000000, 9999999999999 )',
          'mUserid': '@integer( 1000000000000, 9999999999999 )'
        }
      ]
    }
  },
  'retMessage': 'success'
});
