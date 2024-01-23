require("@babel/register");
const express = require("express");
const app = express();

const config = require("./config/serverConfig");

const PORT = 3000;
const IndexRout = require("./routes/Index.routes");

config(app);
console.log('1111');
app.use("/", IndexRout);

app.listen(PORT, () => {
  console.log("Сервер запущен на порту:", PORT);
});
