const http = require("http");

const port = 3000;

const fs = require("fs");
const htmlfile = fs.readFileSync("./views/index.html", "utf-8");
const cssfile = fs.readFileSync("./views/style.css", "utf-8");
const server = http.createServer((req, res) => {
  console.log("🚀 ~ server ~ req.url:", req.url);
  if (req.url == "/") {
    res.write(htmlfile);
    res.statusCode = 200;
  } else if (req.url == "/style.css") {
    res.write(cssfile);
    res.statusCode = 200;
  } else if (req.url == "/a") {
    res.write("my a page");
    res.statusCode = 200;
  } else {
    res.statusCode = 404;
    res.write("not found page");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
