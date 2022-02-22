const express = require('express')
const dotenv  = require('dotenv').config()
const {errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))

// let greeting = name => console.log(`Hello  ${name}`);

// const userInfo = (firstName,lastName,callback) => {
//     const fullName = `${firstName} ${lastName}`
//     callback(fullName)
// }
// userInfo('John','Doe',greeting);
app.use(errorHandler);
app.listen(port,() => console.log(`Server Started On Port ${port}`))

