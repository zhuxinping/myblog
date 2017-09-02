/**
 * Created by ZXP on 2017/9/2.
 */
let express = require('express');
// let {User} = require('../model');
let router = express.Router();
//用户注册/user/signup
/*
*  注册功能如何实现
* 1.绘制注册页面模板(username password email)
* 2.实现提交用户注册的路由 post  /user/signup
* 3.在路由中获得请求体，把此用户信息保存到数据库中
* 4.保存完毕后跳转到登录页
*
* **/
router.get('/signup',function (req,res) {
    res.render('user/signup',{title:'注册'});
});
// router.post('/signup',function (req,res) {
//     let user =req.body;//请求体对象(username password,email)
//     User.create(user,function (err,doc) {
//         //_id
//         if(err){
//             res.redirect('back');
//         }else{
//             res.redirect('/user/signin');
//         }
//     });
// });
router.get('/signin',function (req,res) {
    res.render('user/signin',{title:'登录'});
});
router.get('/signout',function (req,res) {
    res.render('user/signout',{title:'用户退出'});
});
module.exports = router;