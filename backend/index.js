const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const routes = require("./routes/index")

require("dotenv").config()

const app = express()

// set some middlewares
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(
  uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => console.log(console.log("connection created", err))
)

app.use("/", routes)

// get route
app.get("/", (req, res) => {
  res.send("hellloooo")
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
