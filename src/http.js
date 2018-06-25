import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

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
      if (res.data.retCode !== 0) {
        reject(res.data.retMessage);
        return false;
      }
      resolve(res.data);
    }).catch(err => function () {
      Message.error('网络连接失败,请稍后再试!');
      console.log(err);
    });
  });
}
