# htmlparse

## 使用说明
### 1. app.json引入插件
```json
{
  "pages": [
    ...
  ],
  "plugins": {
    "wxparse": {
      "version": "dev",
      "provider": "wx5d60c080635009b1"
    }
  }
}
```

### 2. 页面配置文件中引入插件组件
```json
{
  ...,
  "usingComponents": {
    "wxparse": "plugin://wxparse/wxparse",
    ...
  }
  ...,
}
```

### 3. 在页面中使用插件
```wxml
<wxparse data="{{ html }}"></wxparse>
```

### 4. 可用属性请访问组件[github仓库](https://github.com/ianzhi/wxParse)查询
