import ajax from '../utils/request.js';

const posts = {
  /**
   * 列表
   */
  list: function (page) {
    return ajax.get('/posts?page=' + page);
  },

  /**
   * 根据id获取一条
   */
  getOne: function (id) {
    return ajax.get('/posts/' + id);
  }
}

export default posts