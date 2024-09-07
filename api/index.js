const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Congratulation 🎉🎉! Our Express server is Running on Vercel"));

// New 'name' endpoint
app.get("/name/:name", (req, res) => {
    const name = req.params.name; // Retrieve the 'name' parameter from the URL
    res.send(`Hello, ${name}!`);
  });

app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;
