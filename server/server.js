const exprees = require("express")

const app =  exprees()

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server is Running at Port : ${PORT}`)
})