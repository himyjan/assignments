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
  .route("/")
  .get((req, res) => {
    res.render("list.html", { tasks: req.cookies.tasks });
  })
  .post((req, res) => {
    const listItems = req.cookies.tasks ?? [];
    listItems.push(req.body.title);
    res.cookie("tasks", listItems);
    res.redirect("/");
  });
app.listen(5000, () => {
  console.log("listening on http://127.0.0.1:5000");
});

// auto close node process
setTimeout(() => {
  exit(0);
}, 20000);
