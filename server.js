const express=require('express')
const articleRouter=require('./routes/article')
const app=express()


app.set('view engine','ejs')


app.use('/article',articleRouter)


app.get('/',(req,res)=>{
    const articles=[{
        title:'Test title',
        createdAt:new Date(),
        description:'Test description'
    }]
    res.render('index',{articles:articles})
})
app.listen(5000)