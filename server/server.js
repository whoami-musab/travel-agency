const express = require('express')

const app = express()

app.use(express.json())

app.listen(3001, 'Server listening on port http://localhost:3001')