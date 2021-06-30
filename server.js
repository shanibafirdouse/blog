const express=require('express')
const mongoose=require('mongoose')
const articleRouter=require('./routes/article')
const app=express()
  
mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser:true,useUnifiedTopology:true
})

app.set('view engine','ejs')


app.use('/article',articleRouter)


app.get('/',(req,res)=>{
    const articles=[{
        title:'Test title',
        createdAt:new Date(),
        description:'Test description'
    }]
    res.render('articles/index',{articles:articles})
})
app.listen(5000)