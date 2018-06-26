import * as ApiPath from '@/api';

const Mock = require('mockjs');

Mock.mock(ApiPath.getRbUserTable, 'post', {
  'retCode': 0,
  'responseDate': {
    'accountVoList|1-20': [{
      'custId|+1': 1,
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
      'companyName': '@Cname',
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
      'attachVos': [
        {
          'fileType': '0',
          'attachName': '2.PNG',
          'filePath': '/jf/test/register/0/20180524152004.PNG'
        },
        {
          'fileType': '1',
          'attachName': 'A7YA0PZPIWQN%`VMPNUBX5C.png',
          'filePath': '/jf/test/register/1/20180524152008.png'
        },
        {
          'fileType': '2',
          'attachName': 'A7YA0PZPIWQN%`VMPNUBX5C.png',
          'filePath': '/jf/test/register/2/20180524152012.png'
        },
        {
          'fileType': '3',
          'attachName': '2.PNG',
          'filePath': '/jf/test/register/3/20180524152016.PNG'
        },
        {
          'fileType': '4',
          'attachName': 'A7YA0PZPIWQN%`VMPNUBX5C.png',
          'filePath': '/jf/test/register/4/20180524152023.png'
        },
        {
          'fileType': '5',
          'attachName': '2.PNG',
          'filePath': '/jf/test/register/5/20180524152027.PNG'
        },
        {
          'fileType': '6',
          'attachName': '1.PNG',
          'filePath': '/jf/test/register/6/20180524152032.PNG'
        },
        {
          'fileType': '7',
          'attachName': '1.PNG',
          'filePath': '/jf/test/register/7/20180524152036.PNG'
        },
        {
          'fileType': '8',
          'attachName': 'WSN-XS-2018-0524-0107.pdf',
          'filePath': '/jf/test/register/8/20180524152224.pdf'
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
