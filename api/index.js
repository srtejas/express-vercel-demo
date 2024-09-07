const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Congratulation 🎉🎉! Our Express server is Running on Vercel"));

app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;
