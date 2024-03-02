const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/user/:id", (req, res) => {
  const q = req.params; //params로 get하는 방법
  console.log(q.id);

  res.send({ userif: q.id });
});

app.get("/cat", (req, res) => {
  res.json({ 고양이: "야옹야옹" }); //send로 하는 것과 거의 같은데, json으로 명시적으로 적을 수 있음
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
