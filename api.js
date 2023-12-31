const express = require('express');
const serverless = require('serverless-http')
const app = express();
const router = express.Router();



app.get('/',(req,res)=>{
    res.send('working')
})
app.listen('3000',()=>{
    console.log('Backend is listing at port 3000')
})


app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app);