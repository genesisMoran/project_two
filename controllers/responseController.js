const db = require('../models/Response'); // Might have to add `.js`

module.exports = {
  index(req, res, next){
    db.findAll()
    .then((responses) => {
      res.locals.data = responses;
      next();
    })
    .catch((e) => {
      next(e);
    });
  },

  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((response) => {
        res.locals.data = response;
        next();
      })
      .catch((rejection) => {
        next(rejection);
      });
  },

  // create(req, res, next) {
  //   model.create(req.body)
  //     .then((response) => {
  //       res.locals.response = response;
  //       next();
  //     })
  //     .catch(err => next(err));
  // },

  // update(req, res, next) {
  //   req.body.id = req.params.id;
  //   model.update(req.body)
  //     .then((response) => {
  //       res.locals.response = response;
  //       next();
  //     })
  //     .catch(err => next(err));
  // },

  // destroy(req, res, next) {
  //   model.destroy(req.params.id)
  //     .then(() => next())
  //     .catch(err => next(err));
  // },
};
