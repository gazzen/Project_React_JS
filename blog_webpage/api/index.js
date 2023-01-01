
//For MYsql

import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
//this code is used in #posts
// app.get('/test',(req,res)=>{
//     res.json('its works! Hurray!')
// })
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)


app.listen(3000,()=>{
    console.log('It is CONNECTED!')
})