const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  const buffer = fs.readFileSync('output.txt')
  const output = buffer.toString()
  console.log(output)
  res.send(output)
})

app.post('/', (req, res) => {
  console.log(req.body)
  fs.appendFileSync('output.txt', `\n${JSON.stringify(req.body)}`);
  res.send('Bye!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})