import wxparse from './wxparse/wxParse.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: String,
      value: ''
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
  },

  attached: function () {
    wxparse.wxParse('article', 'html', this.properties.data, this, 5);
  }
})
