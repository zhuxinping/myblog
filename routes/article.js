/**
 * Created by ZXP on 2017/9/2.
 */
let express = require('express');
let router  =express.Router();
// /article/add
router.get('/add',function (req,res) {
    res.render('article/add',{title:'发表文章'});
});
module.exports = router;