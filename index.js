const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params; //value값을 name으로 한번에 넣어줌

  if (name == "dog") {
    res.json({ sound: "멍멍" }); //send로 하는 것과 거의 같은데, json으로 명시적으로 적을 수 있음
  } else if ((name = "cat")) {
    res.json({ sound: "야옹야옹" });
  } else if ((name = "pig")) {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
