# nodejs-test

## 后台启动应用

`node server.js 8888 >! log 2>&1 &`

## 启动应用

`node server.js 8888`

## 添加路由

1. 打开 server.js，添加 if else
2. 重新运行 node server.js 8888

## 实现功能

1. 获取json文件的json数据，并动态写入html文档中
2. 分为server.js与server-cors.js两份服务文件，在server-cors.js文件中添加了一个响应请求头`Access-Control-Allow-Origin:localhost:8888`，用于模拟本地的`cors`
