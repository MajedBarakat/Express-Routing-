const express = require('express');
const app = express();
const log = require('./middleware/log')

app.use(express.static(__dirname + "/page"));

app.use(log);
const port = 3003;

// app.get('/page',(req,res)=>{
//     res.send('hello world...')
// })

app.listen(port,(err)=> {err? console.log(err):
console.log(`server is running on port ${port}...`)})    