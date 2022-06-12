const express = require('express')
const path = require('path')
const cors = require('cors')
const colors = require('colors')
const dotenv  = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

const whitelist =["http://localhost:3000"]

const corsOptions = {
    origin:function(origin,callback)
    {
        if(!origin||whitelist.indexOf(origin)!==-1)
        {
            callback(null,true)
        }
        else
        {
            callback(new Error("Not allowed by CORS"))
        }
        
    },
    credentitals:true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

//Server frontend
if(process.env.NODE_ENV === 'production')
{
  app.use(express.static(path.join(__dirname,'../frontend/build')))
  app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'../','build','index.html')))
}
else
{
    app.get('/',(req,res) => res.send("Please Set To Production"))
}

app.use(errorHandler);
app.listen(port,() => console.log(`Server Started On Port ${port}`))

