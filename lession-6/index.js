// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, "utf8");

// ourReadStream.on("data", (c) => {
//   console.log(c);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head>");
    res.write(
      '<body><form method="post" action="/process"><input name="message" /></form></body></html>'
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    req.on("data", function (chunk) {
      console.log(chunk.toString());
    });
    res.write("Processing...");
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(3000);
console.log("server listening on port: 3000");
