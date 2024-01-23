require("@babel/register");
const express = require("express");
const app = express();

const config = require("./config/serverConfig");

const PORT = 3000;
const IndexRout = require("./routes/Index.routes");

config(app);

app.use("/", IndexRout);

app.listen(PORT, () => {
  console.log("Сервер запущен на порту:", PORT);
});
