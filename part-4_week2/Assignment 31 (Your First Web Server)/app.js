// Node.js Express 框架 https://www.runoob.com/nodejs/nodejs-express-framework.html

// const express = require("express");
// const PORT = 3000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("index.html");
// });

// app.listen(PORT, () => {
//   console.log(`App is listening on port : ${PORT}`);
// });

//----------------------------------------------------------------
// https://nodejs.org/api/process.html#process_process_exit_code
const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

const server = http.createServer(app);

// 'listening' Event Fired
server.listen(3000);

// auto close node process
setTimeout(() => {
  exit(0);
}, 3000);

// opens the url in the default browser
const open = require("open");
open("http://localhost:3000/");
