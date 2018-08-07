const model = require('../models/Response'); // Might have to add `.js`

module.exports = {
  index(req, res, next) {
    model.findAll()
      .then((responses) => {
        res.locals.responses = responses;
        next();
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    model.findOne(req.params.id)
      .then((response) => {
        res.locals.response = response;
        next();
      })
      .catch(err => next(err));
  },

  create(req, res, next) {
    model.create(req.body)
      .then((response) => {
        res.locals.response = response;
        next();
      })
      .catch(err => next(err));
  },

  update(req, res, next) {
    req.body.id = req.params.id;
    model.update(req.body)
      .then((response) => {
        res.locals.response = response;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    model.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};
