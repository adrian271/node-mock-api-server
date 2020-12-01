'use strict'

let express = require('express')

let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(`Request: ${req.method} ${req.url}`)
  setTimeout(() => {
    res.status(200).send({
      success: {
        status: 200,
        msg: 'ok',
      },
    })
  }, 5000)
})

let port = process.env.PORT || 6625
app.listen(port, () => {
  console.clear()
  console.log(`API server started on port ${port}`)
})
