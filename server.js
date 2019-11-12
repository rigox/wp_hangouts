const express  =  require("express")
const  dotenv  =  require("dotenv")
const colors = require("colors")
const app = express()
 
//load enviromental variables
dotenv.config({path:'./config/config.env'})


//setup body parser
app.use(express.json(),express.urlencoded({extended:true}))


//app listen
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
     console.log(`listening on PORT ${PORT}`.red)
})