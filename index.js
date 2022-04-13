const express = require('express')
const app = express()
const port = 3030

const router = require('./routes')
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({
    extended:true
}))

app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello Di Route Awal!')
})

app.listen(port, () => {
    console.log(`Hello World Manual berjalan di http://localhost:${port}`)
})