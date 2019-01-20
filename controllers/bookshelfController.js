const db = require('../models');

module.exports = {

  findAll: (req, res) => {
    db.Book
      .find({})
      .sort({date: -1})
      .then(dbBooks => res.json(dbBooks))
      .catch(err => console.log(err))
  },

  create: (req, res) => {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err))
  },

  delete: (req, res) => {
    db.Book
      .findByIdAndDelete(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => console.log(err))
  }
};