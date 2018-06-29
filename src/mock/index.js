require('@/mock/finacing/userTable');
require('@/mock/eCommerce/eCommerce');
require('@/mock/RB/RB');
require('@/mock/dashboard/count');

const Mock = require('mockjs');

Mock.setup({
  timeout: 1000 - 2000
});
