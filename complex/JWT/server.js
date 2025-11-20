const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET = "x";

app.post("/login", (req, res) => {
  if (req.body.user === "a" && req.body.pass === "1")
    return res.json({ token: jwt.sign({ user: "a" }, SECRET) });
  res.status(401).send("no");
});

app.get("/protected", (req, res) => {
  try {
    const data = jwt.verify(req.headers.token, SECRET);
    res.send("Hello " + data.user);
  } catch {
    res.status(401).send("bad token");
  }
});
app.listen(3000);
