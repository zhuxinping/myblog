/**
 * Created by ZXP on 2017/9/2.
 */
let express = require('express');
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
app.use('/',index);
/**
 * /首页
 * /user/signup注册
 * /user/signin登录
 * /user/signout退出
 *  /article/add 发表文章
 * */
//当客户端请求过来的路径是/user开头的话,会交由user中间件来处理/user/singup  /user/signin
app.use('/user',user);
app.use('/article',article);
app.listen(8080);
