const express    = require('express');
const controller = require('../controllers/responseController');
const views      = require('../controllers/viewController');

const responseRouter = express.Router();

const showJSON = (req, res) => {
res.json(res.locals.data);
};
const handle404 = (err, req, res, next) => {
res.sendStatus(404);
};
const send400 = (err, req, res, next) => {
res.sendStatus(400);
};
   
responseRouter.get('/:id/edit', controller.getOne, views.showEditForm);
responseRouter.get('/new', views.showBlankForm);

responseRouter.route('/:id')
  .get(responseController.getOne, showJSON)
  .put(responseController.update, showJSON)
  .delete(responseController.destroy, (req, res) => {
  res.sendStatus(200);
});

responseRouter.route('/')
.post(responseController.create, showJSON, send400)
.get(responseController.index, showJSON);

responseRouter.use(handle404)


// responseRouter.get('/:id/edit', controller.getOne, views.showEditForm);
// responseRouter.get('/new', views.showBlankForm);

// responseRouter.get('/', controller.index, views.showAll, views.show404)
//   .post('/', controller.create, views.handleCreate);

// responseRouter.get('/:id', controller.getOne, views.showOne, views.show404)
//   .put('/:id', controller.update, views.handleUpdate)
//   .delete('/:id', controller.destroy, views.handleDestroy);

module.exports = responseRouter;
