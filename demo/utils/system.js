import wxs from './wxs.js';

const system = {
  get: function () {
    return wxs.getStorage({ key: 'systemInfo' })
      .then(res => { return res.data; })
      .catch(err => { return system.getSystemInfo(); });
  },
  getSystemInfo: function () {
    return wxs.getSystemInfo()
      .then(res => { return wxs.setStorage({ key: 'systemInfo', data: res }).then(response => { return res; }); });
  }
}

export default system;