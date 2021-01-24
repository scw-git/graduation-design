
// index.js中引入了这个模块，并且传入了一个express创建的app实例
module.exports = (app) => {

    // 定义子路由，router为子路由--------------------------------------
    const express = require('express')
    const router = express.Router()

    //引入商品类型的模型---------------------------------------------商品类型开始
    const productType = require('../../models/productType')
    //新增商品类型接口
    router.post('/productType', async (req, res) => {
        const model = await productType.create(req.body)
        res.send(model)
    })
    //获取接口
    router.get('/productType', async (req, res) => {
        const items = await productType.find().limit(6)
        res.send(items)
    })
    //更新接口（id有下划线，根据请求参数里面的id更新内容。有些是根据路由里面的params.id更新，这种方法请求路径一定要哦加ID）
    router.put('/productType', async (req, res) => {
        const model = await productType.findByIdAndUpdate(req.body._id, req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/productType/:id', async (req, res) => {
        await productType.findByIdAndDelete(req.params.id, req.body)
        res.send({
            status: 200,
            success: true,
        })
    })
    // //删除接口
    // router.delete('/productType', async (req, res) => {
    //     await productType.findByIdAndDelete(req.body.id, req.body)
    //     res.send({
    //         status: 200,
    //         success: true,
    //     })
    // })
    //引入商品类型的模型---------------------------------------------商品类型结尾
    //引入商品模型---------------------------------------------商品开始
    const product = require('../../models/product')
    // 新增商品接口
    router.post('/product', async (req, res) => {
        const model = await product.create(req.body)
        res.send(model)
    })
    //获取接口
    router.get('/product', async (req, res) => {
        const model = await product.find().limit(6)
        res.send(model)
    })
    //更新接口
    router.put('/product', async (req, res) => {
        const model = await product.findByIdAndUpdate(req.body._id, req.body)
        res.send(model)
    })
    //删除接口
    router.delete('/product/:id', async (req, res) => {
        await product.findByIdAndDelete(req.params.id, req.body)
        res.send({
            status: 200,
            success: true,
        })
    })
    //商品接口---------------------------------------------商品结尾


    //上传的图片，需要下一个库 npm i multer
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../upload' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {

        const file = req.file
        file.url = `http://localhost:3000/upload/${file.filename}`//返回一个服务端图片地址
        res.send(file)
    })


    app.use('/admin/api', router)

}