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
      'areaInfo': '@city(true)',
      'companyName': '@CNAME',
      'regDate': '@datetime',
      'authDate': '@datetime',
      'custType': '@integer(0,2)',
      'enterpriseTypeCode': '@cparagraph(1)', // 企业性质
      'custSupply': '@cparagraph(1)' // 主营行业
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

Mock.mock(ApiPath.getECommerceCompanyDetail, 'post', {
  'retCode': 0,
  'responseDate': {
    'companyDetailVo': {
      'companyName': '@Cname',
      'companyAddress': '@county(true)',
      'businessReprentative': '@Cname', // 业务代表
      'custType': '@integer(0,2)',
      'unifiedSocialInformationCode': '@integer( 10000000, 99999999999 )', // 统一社会信息代码
      'taxRegistrationNumber': '@integer( 10000000, 99999999999 )', // 税务登记号
      'businessRegistrationNumber': '@integer( 10000000, 99999999999 )', // 工商登记号
      'areainfo': '@city(true)',
      'custState': '@integer(0,9)', // 客户状态  0：待审核；1：审核通过；2：审核不通过；3：注销；4：资料被保存；5：申请注销；6:资料未填写；9：删除（非物理删除）'
      'infoAuth': '@integer(0,5)', // 信息认证状态  0：未认证；1：认证通过；2：认证不通过；3：重新认证；5:资料未填写
      'enterpriseTypeCode': '@cparagraph(1,2)', // 企业性质
      'custSupply': '@cparagraph(1,2)', // 主营行业
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
      'companyAccountVo|1-10': [
        {
          'loginName': '@Cname',
          'cellPhone': '@integer( 1000000000000, 9999999999999 )',
          'email': '@email',
          'firstRegPlatform': '@integer(1,3)'
        }
      ]
    }
  },
  'retMessage': 'success'
});
