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
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/myName", (req, res) => {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

const server = http.createServer(app);

// 'listening' Event Fired
server.listen(3000);

// auto close node process
setTimeout(() => {
  exit(0);
}, 30000);

// opens the url in the default browser
const open = require("open");
open("http://localhost:3000/");
