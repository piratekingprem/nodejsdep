const express = require('express');
const app = express();
const apiRoutes = require('./src/api/routes/api');
require('dotenv').config();
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send('working if changed too 3')
})
app.use(express.json());
app.use("/api/v1",apiRoutes);
app.listen(PORT,()=>{
    console.log('Backend is listing at port ',PORT);
})