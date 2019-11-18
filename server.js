const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
let proj = "authors";

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(__dirname + "/public/dist/public"));

require("./server/config/database");
require("./server/config/routes")(app);

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(PORT, () => console.log(`listening to ${proj} on port ${PORT}`));
