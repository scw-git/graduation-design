const express = require('express')

const app = express()
app.use(require('cors')())//解决跨域
app.use(express.json())//使用json格式
//表示可以用前面的接口地址（ /upload），访问server下的upload文件
// 相当于开发upload文件夹，用/upload+图片地址就可以访问图片
app.use('/upload', express.static(__dirname + '/upload'))

//引入并使用数据库
require('./plugins/db.js')(app)
// 把后端路由引入，并执行。把app实例传入，admin中就可以使用了。
require('./routes/admin')(app)



app.listen(3000, () => {
    console.log('http://localhost:3000');
})