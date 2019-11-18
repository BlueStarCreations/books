const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const db = "books-db";

mongoose.connect(`mongodb://localhost/${db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    require(models_path + "/" + file);
  }
});
