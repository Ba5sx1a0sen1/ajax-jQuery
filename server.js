//8888
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('得到 HTTP 路径\n' + path)
  console.log('查询字符串为\n' + query)
  console.log('不含查询字符串的路径为\n' + pathNoQuery)
 
  if(path === "/"){
    let string = fs.readFileSync('./index.html','utf-8')
    response.statusCode = 200 // HTTP第一部分的响应状态码
    response.setHeader('Content-Type','text.html;charset=utf-8') //HTTP第二部分的key:value
    response.write(string)
    response.end() //HTTP第四部分的字符串值
  }else if(path==='/main.js'){
    let string = fs.readFileSync('./main.js','utf-8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path==='/main-promise.js'){
    let string = fs.readFileSync('./main-promise.js','utf-8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path==='/xxx'){
    response.statusCode = 200
    response.setHeader('Content-Type','application/json;charset=utf-8')
    response.write(`
        {
            "name":"小森",
            "age":21
        }
    `)
    response.end()
  }else if(path==="/getdata"){
    let jsonData = fs.readFileSync('./data.json','utf-8')
    response.statusCode = 200
    response.setHeader('Content-Type','application/json;charset=utf-8')
    response.write(jsonData)
    response.end()
  }else{
      let string = "出错，404"
      response.setHeader('ContentType','text/html;charset=utf-8')
      response.write(string)
      response.end()     
  }








  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
