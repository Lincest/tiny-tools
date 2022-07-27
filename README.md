# Tiny Tools

> 以angular框架开发的一个个人项目，提供一些前端小工具

[![OSCS Status](https://www.oscs1024.com/platform/badge/Lincest/tiny-tools.svg?size=small)](https://www.oscs1024.com/project/Lincest/tiny-tools?ref=badge_small)

## Feature & TODO

### 文本变更比较

![](https://youpai.roccoshi.top/img/202207111722437.png)

- [x] 字符对比
- [x] 行对比
- [x] json对比

### json格式化

![](https://youpai.roccoshi.top/img/202207200235027.png)

- [x] json格式化
- [x] json高亮
- [x] json压缩
- [x] 一键复制
- [x] json转xml

### 在线markdown生成slide

![](https://youpai.roccoshi.top/img/202207200235517.png)

- [x] 在线markdown编辑
- [x] 在线markdown预览
- [x] 在线slide生成
- [x] slide全屏展示
- [x] 文件上传
- [x] 文件导出的指引

### 在线时间转换

![](https://youpai.roccoshi.top/img/202207231634250.png)

> 支持iso8601时间, 时间戳, utc时间, 自定义时间格式等, 并提供格式format参考
 
### 一个无服务器的pastebin

> TODO: 通过压缩算法(待定)将内容压缩, 然后用base64等方式(待定)编码, 并使用校验和保证内容的一致性, 数据都存在url中, RFC并未对url的长度做限制, 取决于浏览器的实现
> 如 https://www.geeksforgeeks.org/maximum-length-of-a-url-in-different-browsers/ 所说, chrome允许url保存2MB的数据, 对于日常纯文本的数据纯纯够用
> url通过bitly等短链接服务进行压缩, 如果内容过长, 考虑使用嵌套的短连接服务(magic)

## Deploy

`ng deploy --base-href=https://blogbak.roccoshi.top/tiny-tools/`
