const express = require("express");

let app = express();

app.get("/", (req, res) => {
  return res.send("Hello world🎉");
});

app.use(require("./routes"));

app.use((req, res) => {
  return res.send("wrong url💔");
});
app.listen(8080);
