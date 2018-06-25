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
    default: return '---'; break;
  };
}
export {empty, custType};
