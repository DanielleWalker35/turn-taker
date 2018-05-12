const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");


const peopleRouter = require("./routes/peopleRoutes.js");
const choreRouter = require("./routes/choreRoutes.js");

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

//routes
app.use("/api/people", peopleRouter);
app.use("/api/chores", choreRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/turn-taker", (err)=>{
    if(err) console.error(err);
    console.log("connected to mongodb");
})

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => console.log("server running on port " + port));