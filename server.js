const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req,res,next)=>{
  console.log(req.url, req.method, res.statusCode)
  next()
})

app.use(express.static("public"));
 require("./routes/apiRoute.js")(app)
 //app.use(require("./routes/apiRoute.js"));
require("./routes/htmlRoutes.js")(app)
 ///app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    
useNewUrlParser: true,
useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.listen(PORT, () => 
    console.log("working connection!"));
 
