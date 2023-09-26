var path = require("path");

const fileName = path.basename("D:/learning-nodejs/readme.md");
const fileDir = path.dirname("D:/learning-nodejs/readme.md");
const fileExt = path.extname(fileName);
const filePathObj = path.parse(fileName);
const filePathObjFormat = path.format( { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' });
// console.log(fileName);
// console.log(fileDir);
// console.log(fileExt);
console.log(filePathObj);

console.log(filePathObjFormat);
