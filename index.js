import express from 'express'
import comicRoute from './routes/comic.route.js'
import connectDB from './db/connectdb.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express()
const port = process.env.PORT 
const DB_URL = process.env.DB_URL

//Database Connection
connectDB(DB_URL);

//Middleware
app.use(express.json())

//Routes
app.use('/',comicRoute)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})