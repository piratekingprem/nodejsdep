const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('working if changed too')
})
app.listen('3000',()=>{
    console.log('Backend is listing at port 3000')
})
