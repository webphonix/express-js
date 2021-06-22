const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello,Welcome......!')
});
app.get('/ekta', (req, res) => {
  res.send('Hello, ekta....!')
});
app.post('/', (req, res) => {
  res.send('Please visit again.')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})