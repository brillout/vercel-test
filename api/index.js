const path = require("path");
const fs = require("fs");

console.log("__dirname", __dirname);
const files = ls(path.join(__dirname, ".."));
console.log("__dirname/../*", files);

module.exports = async (req, res) => {
  res
    .status(200)
    .setHeader("content-type", "text/html")
    .send("Server rendered HTML");
};

function ls(dir) {
  return fs.readdirSync(dir).map(function (file) {
    file = dir + "/" + file;
    return file;
  });
}
