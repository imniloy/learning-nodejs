const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the home page!");
    res.end();
  } else if (req.url === "/about") {
    res.write("Welcome to about page!");
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(3000);
console.log("Listening on http://localhost:3000");
