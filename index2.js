// import express js
const express = require("express");

//import some middleware module
const morgan = require("morgan");

//app = exp
const app = express();

//select the port
const port = 3005;

//use exp on all app
// app.use(express.static("./views"));
// app.use((req, res, next) => {
//   console.log("MIDLLWARE");
//   console.log(`The name of port is ${port} and this is app = ${app}`);
//   next();
// });

//use exp on all app with some module
//morgan dev is => :method :url :status :response-time ms - :res[content-length]
app.use(morgan("dev"));

//routing
app.get("/", (req, res) => {
  res.send("Hello main!");
});
app.get("/home", (req, res) => {
  res.send("Hello home!");
});
app.get("/about", (req, res) => {
  res.send([
    { title: "omar", id: 1 },
    { title: "hala", id: 2 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
