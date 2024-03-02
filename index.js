const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/dog", function (req, res) {
  res.send({ 강아지: "멍멍" });
});

app.get("/cat", function (req, res) {
  res.json({ 고양이: "야옹야옹" }); //send로 하는 것과 거의 같은데, json으로 명시적으로 적을 수 있음
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
