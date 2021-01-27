const mongoose = require('mongoose')
const scheme = new mongoose.Scheme({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        unique: true,//设置唯一值
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
    }

})
const User = mongoose.model('user', scheme)
//设置一个超级管理员（在index.js中引入该文件，执行一次后就创建了admin。然后把这个创建代码注释掉。否则会多次创建）
// User.create({
//     username: 'admin',
//     password: 'admin',
// }).then(() => {
//     console.log('用户创建成功')
// }).catch(() => {
//     console.log('失败')
// })
module.exports = {
    User
}