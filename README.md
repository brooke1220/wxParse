# wxParse
微信小程序富文本解析组件

> 公司做小程序需要在小程序中渲染html，采用了wxParse库，但是在使用过程中，发现这个库可能不是那么完善，还有一些问题，访问github仓库发现代码已经很久没有维护了。
> 接下来可能会修复一些已经发现的问题，这里共享一下修改后的代码，以方便有需要的人。

## 关于组件
- 本项目使用[icindy/wxParse](https://github.com/icindy/wxParse)代码二次开发。
- 欢迎issue，欢迎pr。
- 组件使用了lifetimes属性，请确保基础库版本`>=`2.2.3。如果需要支持`2.2.3`以下版本，将生命周期函数复制到Component构造器的第一级参数中即可。

## 使用方式
### 复制源代码方式 
#### 1. 在需要使用组件的配置文件上添加组件
```json
{
  "usingComponents": {
    "wxparse": "/path/to/wxparse/wxparse"
  }
}
```

#### 2. 在页面wxml中
```html
<wxparse data="{{ html }}" type="html" padding="5" url-prefix="https://static.demo.com"></wxparse>
```
属性说明：
- data： 要渲染到页面的数据
- type： 要渲染数据的类型（html或者md）
- padding: 渲染后的图片内距
- url-prefix: 渲染图片时的固定url前缀

### 插件方式
> 如果使用插件方式，请注意插件更新提醒。一般比源代码修改慢1-2天。
#### 1. 微信公众平台后台添加插件
搜索`htmlparse`,之后添加。
#### 2. 小程序配置(app.json)中添加插件
```json
{
  "plugins": {
    ...,
    "wxparse": {
      "version": "1.0.1",
      "provider": "wx5d60c080635009b1"
    },
    ...
}
```
#### 3. 在需要使用的页面添加组件
```json
{
  ...,
  "usingComponents": {
    "wxparse": "plugin://wxparse/wxparse"
  },
  ...
}
```
#### 4. 在wxml中使用组件
```html
<wxparse data="{{ article.content_html }}"></wxparse>
```

### 4. 关于代码高亮
- 代码高亮使用highlight.js
- 对于其他语言的支持，请直接到[这里](https://github.com/highlightjs/highlight.js/blob/master/src/languages)查看所有支持的语言
- 其他的皮肤主题，请到[这里](https://github.com/highlightjs/highlight.js/blob/master/src/styles)查看所有的主题。
- 添加支持的语言需要在语言的function关键字前添加`export default`
- 需要在src/highlight/hljs中注册语言
- 主题文件需要在wxparse.wxss中引入

## 小程序示例
> 微信小程序更新会慢于组件更新，主要在于微信小程序的审核时间。更新状态请以更新日志为准。
> 更换站点域名，小程序自2019年3月26日起暂时不能访问，，，
![微信小程序](./wechat-program.jpg)

## 待修复问题
- 删除组件中调用的微信api，改为传入参数
- 表格解析有误的问题（issue#1， 这个可能会烂尾--，）
- 后端html转json插件

## 更新日志
- 2019-04-02
    - 修复行内样式的问题（issue#6）(插件1.0.4版本)
- 2019-04-01
    - 添加渲染图片的固定前缀属性(插件1.0.3版本)
    - 最近换电脑来着，开心的装开发环境😋，没怎么更新，不会断更，有问题尽管提，虽然修复就不知道什么时间了~~哈哈哈
- 2019-03-26
    - 修复代码块空格显示错乱的问题(插件1.0.2版本)
    - 重新提交插件代码（审核未通过，服务类目选择错误--，）（插件1.0.1版本）
- 2019-03-25
    - 添加小程序插件代码
    - 添加实例小程序代码
- 2019-03-23
    - 完善代码高亮
- 2019-03-22
    - 添加基本的代码高亮
- 2019-03-20
    - 整理代码结构
- 2019-03-19
    - 优化代码块的处理
    - 优化列表处理
    - 优化样式
- 2019-03-18
    - 修改为使用组件方式调用
    - 点击链接复制链接地址
    - 添加渲染完成事件(bindrendered)
    - 使组件根据数据更新而重新渲染dom
- 2019-03-14
    - 修改代码块的默认展示
    - 修改代码目录
