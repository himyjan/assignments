const templateEngin = require("nunjucks");
const express = require("express");
const app = express();
const CookieParser = require("cookie-parser");
app.use(CookieParser());
app.use(express.urlencoded({ extended: false }));

templateEngin.configure("views", {
  express: app,
});
app.route("/myName").get((req, res) => {
  res.render("myName.html", { myNames: req.cookies.myNames });
});
app
  .route("/trackName")
  .get((req, res) => {
    res.render("trackName.html", { myNames: req.cookies.myNames });
  })
  .post((req, res) => {
    const listItems = req.cookies.myNames ?? [];
    listItems.push(req.body.title);
    res.cookie("myNames", listItems);
    res.redirect("/myNames");
  });
app.listen(3000, () => {
  console.log("listening on http://127.0.0.1:3000");
});
