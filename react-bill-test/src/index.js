import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import sum from "@/test";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
// 定制主题文件
import "./theme.css";

const to = sum(1, 2);

console.log(to);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
