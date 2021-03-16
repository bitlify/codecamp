const express = require("express");
const ejsMate = require('ejs-mate');
const path = require("path");

const app = express();

app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/intro-to-web-dev", (req, res) => {
    res.render("intro-to-web-dev");
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})