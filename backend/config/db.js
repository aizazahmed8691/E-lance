import mongoose from 'mongoose'
const connectDB = async()=>{

    try {
        const uri = process.env.MONGO_URL
        const conn=await mongoose.connect(uri,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log('MongoDB connected:', conn.connection.host)
    } catch (error) {
       console.error('Error:', error.message) 
       process.exit(1)
    }
}
export default connectDB