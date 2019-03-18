import wxparse from './wxparse/wxParse.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'html'
    },
    padding: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理链接点击事件
     */
    wxParseTagATap: function (e) {
      wx.setClipboardData({ data: e.currentTarget.dataset.src });
    }
  },

  attached: function () {
    wxparse.wxParse('article', this.properties.type, this.properties.data, this, this.properties.padding);
  }
})
