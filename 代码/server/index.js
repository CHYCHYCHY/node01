const http = require("http");
const fs = require('fs');
let content = '';

const server = http.createServer(( request, response )=>{
    // console.log('有人发送请求');
    // response.write('<h1>kaikeba</h1>');
    console.log("请求地址：",request.url);
    let url = request.url;
    switch(url){
        case '/':
            content = fs.readFileSync('./template/index.html');
            // console.log('读取到的数据：',content.toString());
            response.write(content);
            break;
        case '/css1.css':
            content = fs.readFileSync('./css/css1.css');
            response.write(content);
            break;
        case '/logo.png':
            content = fs.readFileSync('./static/images/logo.png');
            response.write(content);
            break;
    }
    response.end();
});
server.listen(8080, () => {

    console.log('服务器开启成功，您可以通过：http://localhost:8080访问');
});