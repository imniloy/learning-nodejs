// Project: Uptime monitoring Application...
// Description: A RESTFUL API for monitoring up or down time of user defined links...

// dependencies
const http = require("http");
const url = require("url");

// module scaffoldings
const app = {};

// configuration...
app.config = {
  PORT: 3000,
};

// create server...

app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.PORT, () => {
    console.log(`Server listening on port ${app.config.PORT}`);
  });
};

app.handleRequest = (req, res) => {
  const parseUrl = url.parse(req.url, true, true);
  const path = parseUrl.pathname;
  const trimPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  res.end("Hello World!");
};

app.createServer();
// console.log(app);
