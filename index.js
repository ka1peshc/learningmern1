const express = require('express') // common js STYLE
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get("/youtube", (req, res) => {
    res.send('<h2>Chai aur Code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})