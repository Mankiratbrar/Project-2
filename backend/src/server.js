import connectDB from './db/db.js'
import app from './app.js'
import dotenv from 'dotenv'
dotenv.config({ path: './env' })
connectDB()
.then(()=>{try{
    app.listen(process.env.PORT)
}catch(e){
    console.log(e)
}})
.catch(err=>console.log(err))
