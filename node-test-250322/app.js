const os = require("os");
var osMem = os.freemem();
console.log(osMem);

var osTMem = os.totalmem();
console.log(osTMem);

var osUpTime = os.uptime();
console.log(osUpTime / 3600);

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);

function sayHallo(name) {
  console.log("Hello node, this is " + name + " !");
}

sayHallo("Athanase");

console.log(module);
var logger = require("./logger.js");
console.log(logger);

logger.log("testMessage");
console.log(module);
