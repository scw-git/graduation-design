
//前端的用户，后台没有
module.exports = app => {
    const express = require('express')
    const router = express.Router()//设置一级路由
    app.use('/admin/api', router)
    const user = require('../../../models/user')//引入模型
    router.post('/register', async (req, res) => {
        const model = await user.create(req.body)
        res.send(model)
    })
    router.post('/login', async (req, res) => {
        const model = await user.create(req.body)
        res.send(model)
    })


}