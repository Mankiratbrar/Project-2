import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()   
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:PROCESS.env.CORS_ORIGIN,}))
app.use(express.static('public'))
app.use(cookieParser())



export default app