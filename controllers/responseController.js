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
};
