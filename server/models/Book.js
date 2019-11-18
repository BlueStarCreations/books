const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Author must have a name!"],
    minlength: [3, "Author must have a name 3 characters or longer!"]
  },
  title: {
    type: String,
    required: [true, "Book must have Title!"],
    minlength: [3, "Book must have a title 3 characters or longer!"]
  }
}, { timestamps: true });

mongoose.model("Book", bookSchema);
