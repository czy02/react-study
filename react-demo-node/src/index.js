// index.js
// 用express创建一个app对象，在本地3000端口运行一个http服务，开通一个/根路由的节点。
// 本示是express官网示例，具体看express官网解释。
const express = require("express");
const app = express();
const port = 5600;
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get("/", (req, res) => {
  const a = ["vue", "react", "angular"];
  res.send(a);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
