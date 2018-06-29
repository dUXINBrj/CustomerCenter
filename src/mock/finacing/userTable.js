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

Mock.mock(ApiPath.getFinacingCompany + '?clientType=1', 'post', {
  'retCode': '0',
  'responseDate': {
    'companys|1-20': [{
      'custId|+1': 1,
      'companyName': '@CNAME'
    }]
  },
  'retMessage': '操作成功'
});

Mock.mock(ApiPath.getFinacingCompanyDetail, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyInfoDetail': {
      'companyName': '@Cname',
      'companyAddress': '@county(true)',
      'businessReprentative': '2',
      'custType': '@integer(0,2)',
      'unifiedSocialInformationCode': '@integer( 10000000, 99999999999 )',
      'taxRegistrationNumber': '@integer( 10000000, 99999999999 )',
      'loanCardNumber': '@integer( 10000000, 99999999999 )',
      'threeCertTogether': '@integer(0,1)',
      'email': '@email',
      'remark': '@cparagraph(1,3)',
      'clientType': null,
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
      'companyAccountVo|1-10': [
        {
          'loginAccount': '@CNAME',
          'cellPhone': '@integer( 1000000000000, 9999999999999 )',
          'email': '@email',
          'firstRegPlatform': '@integer(1,3)'
        }
      ]
    }
  },
  'retMessage': 'success'
});
