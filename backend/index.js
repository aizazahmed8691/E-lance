import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'
import getjobRoutes from './routes/getjobRoutes.js'
import jobRoute from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
connectDB()
const app=express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Api is running....')
})

app.use('/gig', gigRoutes);
app.use('/postjob', jobRoute);
app.use('/getjob', getjobRoutes);
app.use('/user',userRoutes)



app.use((req,res,next) =>{
    const error=new Error('not Found')
    res.status(404)
    next(error)
})

app.use((req,res,next)=>{
    const statusCode=res.statutscode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
    })
})
const PORT=process.env.PORT || 5000
app.listen(PORT,console.log('server running in', process.env.NODE_ENV, 'node on port', PORT ))