'use strict'

let express = require('express')

let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('Request was made')
  res.status(200).send({
    success: {
      status: 200,
      msg: 'ok',
    },
  })
})

let port = process.env.PORT || 6625
app.listen(port, () => {
  console.log('api server started')
})
