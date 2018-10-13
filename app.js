const express=require('express')
const app=express()
const bodyParser = require('body-parser')

const verification=require('./routes/verification')
const messagewebhook=require('./routes/messagewebhook')

app.use(bodyParser.json())
//GET http://localhost:4005/
app.get('/',verification)

app.post('/',messagewebhook)

app.listen(4005,()=>{
    console.log("bot_server is listening on port 4005")
})