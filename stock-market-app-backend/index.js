const express = require('express')
const cors = require('cors')
const router = require('./routers/index')
const port = 8000
const app = express()

app.use(express.json())
app.use(router)
app.use(cors())

app.listen(port,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log('listening to port',8000);
})