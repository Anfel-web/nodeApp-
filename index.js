const express = require('express')
const app = express()

app.get('/llll', function (req, res) {
  res.send('anfeeeeeeeel!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})