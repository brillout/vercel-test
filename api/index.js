const path = require('path');
const fs = require('fs');

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

console.log(0)
console.log('__dirname', __dirname)
const files = walk(path.join(__dirname, '..')).filter(p => !p.includes('node_modules'))
console.log('__dirname/**/*', files)

module.exports = async (req, res) => {
  console.log(4)
  console.log('__dirname', __dirname)
  const files = walk(path.join(__dirname, '..')).filter(p => !p.includes('node_modules'))
  console.log('__dirname/**/*', files)

  res
    .status(200)
    .setHeader("content-type", "text/html")
    .send("Server rendered HTML");
};
