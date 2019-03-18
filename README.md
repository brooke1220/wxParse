# wxParse
微信小程序富文本解析组件

> 公司做小程序需要在小程序中渲染html，采用了wxParse库，但是在使用过程中，发现这个库可能不是那么完善，还有一些问题，访问github仓库发现代码已经很久没有维护了。
> 接下来可能会修复一些已经发现的问题，这里共享一下修改后的代码，以方便有需要的人。

## 关于组件
- 本项目使用[icindy/wxParse](https://github.com/icindy/wxParse)代码二次开发。
- 欢迎issue，欢迎pr。

## 使用方式
- 在需要使用组件的配置文件上添加组件
```json
{
  "usingComponents": {
    "wxparse": "/path/to/wxparse/wxparse"
  }
}
```

- 在页面wxml中
```html
<wxparse data="{{ html }}"></wxparse>
```

## 小程序示例
![微信小程序](./wechat-program.jpg)

## 待修复问题
- 整理组件代码,减少组件体积

## 更新日志
- 2019-03-18
    - 修改为使用组件方式调用
    - 点击链接复制链接地址
    - 添加渲染完成事件(bindrendered)
    - 使组件根据数据更新而重新渲染dom
- 2019-03-14
    - 修改代码块的默认展示
    - 修改代码目录
