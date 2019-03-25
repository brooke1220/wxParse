import wxs from '../../utils/wxs.js';
import posts from '../../api/posts.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: [],
    loading: {
      show: false,
      loadingText: '加载中。。。',
    },
    total: '',
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;

    self.loadPosts(self.data.page);
  },

  /**
   * 加载文章
   * 
   * @param int page 页数
   */
  loadPosts: function (page) {
    const self = this;

    return posts.list(page)
      .then(res => {
        self.data.total = res.data.total;
        self.setData({
          posts: self.data.posts.concat(res.data.data)
        });
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.data.posts = [];
    this.loadPosts(1)
      .then(res => { wx.stopPullDownRefresh() });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const self = this;
    if (self.data.posts.length < self.data.total) {

      self.data.page += 1;
      self.loadPosts(self.data.page);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})