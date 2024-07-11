// index.js
// 用express创建一个app对象，在本地3000端口运行一个http服务，开通一个/根路由的节点。
// 本示是express官网示例，具体看express官网解释。
const express = require("express");
const app = express();
const port = 5600;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
