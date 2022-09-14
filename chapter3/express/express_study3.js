const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
  //다음 미들웨어로 넘어가는 역할을 하는 함수 next()
  next();
});
// middle-waear
const myLogger = function (req, res) {
  console.log("LOGGED");
  next();
};
app.use(myLogger);
app.listen(8080);
