window.jQuery = function(){
    let nodes = {0:node,lenth:1}
    return {
        addClass:function(){

        }
    }
}

window.jQuery.ajax = function({url,method,body,headers}){
    //返回一个Promise对象，接收一个函数作为参数
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest
        request.open(method,url)    //要先open才能设置请求头
        for(key in headers){
            request.setRequestHeader(key,headers[key])
        }
        request.onreadystatechange=()=>{
            if(request.readyState===4){
                if(request.status >=200 && request.status<300){
                    resolve.call(undefined,request.responseText) //成功回调
                }else if(request.status >= 400){
                    reject.call(undefined,request) //失败回调
                }
            }
        }
        request.send(body)
        //Promise链式调用的关键
    })
}

window.$ = window.jQuery

myButton.addEventListener('click',(e)=>{
    $.ajax({
        url:'/xxx',
        method:'POST',
        body:'name=cys&age=222',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'aaa':'bbb'
        },
        successFn:(arg)=>{
            console.log(JSON.parse(arg))
        },
        failFn:(arg)=>{
            console.log(arg)
        }
    }).then(
        (responseText)=>{console.log(responseText)},
        (err)=>{console.log(err)}
    )
})

getData.addEventListener('click',(e)=>{
    $.ajax({
        url:'/getdata',
        method:'GET',
        body:'',
        headers:{},
        successFn:(responseText)=>{
            setDom(JSON.parse(responseText))
        },
        failFn:(request)=>{
            console.log('请求失败'+request)
        }
    })
})

function setDom(data){//获取到数据后进行的dom操作
    let domStr = `我叫${data.name}，今年${data.age}岁，目前在${data.college}读计算机科学与技术`
    textBox.textContent = domStr
}