const express=require('express')
const app=express()


app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send('Hello WOrld')
})
app.listen(5000)