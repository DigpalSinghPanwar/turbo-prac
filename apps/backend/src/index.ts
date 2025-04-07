import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

console.log(BACKEND_URL);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.listen(3000);
