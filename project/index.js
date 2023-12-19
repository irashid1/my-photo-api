// index.js

const express = require("express");
const app = express();
const port = 3000; // You can choose any available port

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello, this is your API!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
