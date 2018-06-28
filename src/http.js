import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

export default function Request (url, method, data) {
  if (method) {
    method = method.toUpperCase();
    method = method === 'GET' ? 'GET' : 'POST';
  } else {
    method = 'POST';
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: qs.stringify(data)
    }).then(res => {
      let code = res.data.retCode;
      code = code * 1;
      if (code !== 0) {
        reject(res.data.retMessage);
        return false;
      }
      resolve(res.data);
    }).catch(err => function () {
      console.log(err);
      Message.error('网络连接失败,请稍后再试!');
    });
  });
}
