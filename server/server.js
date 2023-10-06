const exprees = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app =  exprees()
const PORT = process.env.PORT || 8000
dotenv.config()

const authRoute = require("./routes/auth.route")
app.use(exprees.json())

app.use("/api/",authRoute )

app.get("/", (req, res)=>{
    res.send("This Is Get Request")
})

const dbUrl = process.env.MONGOBD_URL

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is Running at Port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });



