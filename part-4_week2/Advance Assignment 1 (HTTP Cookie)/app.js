const templateEngin = require("nunjucks");
const express = require("express");
const app = express();
const CookieParser = require("cookie-parser");
app.use(CookieParser());
app.use(express.urlencoded({ extended: false }));

templateEngin.configure("views", {
  express: app,
});
app
  .route("/myName")
  .get((req, res) => {
    if (
      req.cookies.myNames == undefined ||
      req.cookies.myNames == "undefined"
    ) {
      res.render("trackName.html", { myNames: `${req.cookies.myNames}` });
    } else {
      res.render("myName.html", { myNames: `${req.cookies.myNames}` });
    }
  })
  .post((req, res) => {
    res.cookie("myNames", req.body.title);
    res.redirect("/myName");
  });

app.listen(3000, () => {
  console.log("listening on http://127.0.0.1:3000");
});

// auto close node process
// setTimeout(() => {
//   exit(0);
// }, 20000);

// opens the url in the default browser
const open = require("open");
open("http://localhost:3000/myName");
