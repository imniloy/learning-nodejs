const fs = require("fs");
const data = fs.readFile("readme.md", (error, data) => {
  console.log(data.toString());
});
// console.log(data);
