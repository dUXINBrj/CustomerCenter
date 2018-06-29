let empty = (val) => {
  return val || '暂无';
};

let custType = (val) => {
  val = val * 1;
  /* eslint-disable */
  switch (val) {
    case 0: return '运营商';break;
    case 1: return '企业会员';break;
    case 2: return '个人会员';break;
    default: return '暂无'; break;
  };
};
let custState = (val) => {
  val = val * 1;
  /* eslint-disable */
  switch (val) {
    case 0: return '待审核';break;
    case 1: return '审核通过';break;
    case 2: return '审核不通过';break;
    case 3: return '注销';break;
    case 4: return '资料被保存';break;
    case 5: return '申请注销';break;
    case 6: return '资料未填写';break;
    case 9: return '删除';break;
    default: return '暂无'; break;
  }
};

let infoAuth = (val) => {
  val = val * 1;
  /* eslint-disable */
  switch (val) {
    case 0: return '未认证';break;
    case 1: return '认证通过';break;
    case 2: return '认证不通过';break;
    case 3: return '重新认证';break;
    case 5: return '资料未填写';break;
    default: return '暂无'; break;
  }
};

let threeCertTogether = (val) => {
  switch (val) {
    case 0: return '否'; break;
    case 1: return '是'; break;
    case null: return '暂无';
    default: return '暂无'; break;
  }
};

export {empty, custType, custState, infoAuth, threeCertTogether};
