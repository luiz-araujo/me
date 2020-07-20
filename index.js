var fs = require("fs");
fs.readFile("./info.json", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
