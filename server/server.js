const exprees = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app =  exprees()
const cors = require("cors")
const PORT = process.env.PORT || 8000
dotenv.config()


app.use(exprees.json())
app.use(cors());

const authRoute = require("./routes/auth.route")
app.use("/api/",authRoute )

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



app.use((err,req, res, next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || "Internel Server Error"
  return res.status(statusCode).json({
    success : false,
    message,
    statusCode
  })
})