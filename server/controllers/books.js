let mongoose = require("mongoose");
let Book = mongoose.model("Book");

module.exports = {
  // findAll: function (req, res) {
  index: function(req, res) {
    Book.find()
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) });
  },
  create: function(req, res) {
    Book.create(req.body)
      .then(data => {res.json({ message: "success", data: data })})
      .catch(err => {res.json({ message: "fail", err: err })});
  },
  findById: function(req, res) {
    Book.findById({ _id: req.params.id })
      .then(data => {res.json(data)})
      .catch(err => {res.json(err)});
  },
  update: function(req, res) {
    Book.updateOne({ _id: req.params.id }, req.body, {
      useValidators: true,
      new: true
    })
      .then(data => {res.json({ message: "success", data: data })})
      .catch(err => {res.json({ message: "fail", err: err })});
  },
  delete: function(req, res) {
    Book.deleteOne({ _id: req.params.id })
      .then(data => {res.json(data)})
      .catch(err => {res.json(err)});
  }
};
