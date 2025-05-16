import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("theme", "dark", { maxAge: 10000, httpOnly: true });
  res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
  const theme = req.cookies["theme"];
  res.send(`Cookie theme: ${theme}`);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  console.log("User Id is given as: " + userId);
});

app.listen(3000, () => console.log("Server is available at port: 3000"));
