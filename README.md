#新建一个项目
'''
npm init -y

'''
#安装依赖模块
'''
npm install body-parser cookie-parser debug ejs express morgan serve-favicon express-session connect-mongo mongoose connect-flash multer async --save
'''
# 初始化git
'''
git init
git add -A
git commit -m"初始化项目和依赖安装"

'''
# 创建服务
'''
express+mongoose
let express = require('express');
let app = express();
app.listen(8080);

'''
#跑通路由


