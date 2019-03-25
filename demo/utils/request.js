import wxs from './wxs';
import config from 'config.js';

/**
 * class Request
 * 
 * used to send http request
 */
class Request {

  static _options = {
    baseUrl: config.baseUrl,
    url: '/',
    header: {
      'content-type': 'application/json'
    },
    data: {}
  }

  /**
   * 登陆
   */
  static _login() {
    return wxs.login()
      .then(res => { return res.code; })
      .then(res => { return wxs.request({ url: config.loginUrl, method: 'POST', data: { code: res, miniprogram_id: config.miniprogram_id } }); })
      .then(res => { return wxs.setStorage({ key: 'token', data: res.data }).then(response => { return res.data; }); });
  }

  /**
   * 最终发送请求
   * 
   * @param options Object 最终的请求参数
   */
  static _request(options) {
    options.url = options.baseUrl + options.url;

    return wxs.getStorage({ key: 'token' })
      .then(res => { return res.data; })
      .catch(err => { return Request._login() })
      .then(res => {
        options['data']['api_token'] = res;
        options['data']['token'] = res;
        return wxs.request(options);
      });
  }

  /**
   * get request
   * 
   * @param string url
   * @param object options
   */
  static get(url, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options = Object.assign({}, Request._options, options);

    return Request._request(options);
  }

  /**
   * post
   */
  static post(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'POST';
    options = Object.assign({}, Request._options, options);

    return Request._request(options);
  }

  /**
   * put
   */
  static put(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'PUT';
    options = Object.assign({}, Request._options, options);

    return Request._request(options);
  }

  /**
   * delete
   */
  static delete(url, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.method = 'DELETE';
    options = Object.assign({}, Request._options, options);

    return Request._request(options);
  }
}

export default Request;