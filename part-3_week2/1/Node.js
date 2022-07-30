const express = require("express");
const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello my Server!");
});

app.get("/getData", (req, res) => {
  let { number }  = req.query;
  if (!number) {
    res.send("Lack of Parameter");
  } else if (!isNaN(number)) {
    const fn = (n) => {
      if (n === 1) {
        return 1;
      } else {
        return n + fn(n - 1);
      }
    };
    res.send(`${fn(Number(number))}`);
  } else {
    res.send("Wrong Parameter");
  }
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
