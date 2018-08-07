const express    = require('express');
const controller = require('../controllers/responseController');
const views      = require('../controllers/viewController');

const responseRouter = express.Router();

responseRouter.get('/:id/edit', controller.getOne, views.showEditForm);
responseRouter.get('/new', views.showBlankForm);

responseRouter.get('/', controller.index, views.showAll, views.show404)
  .post('/', controller.create, views.handleCreate);

responseRouter.get('/:id', controller.getOne, views.showOne, views.show404)
  .put('/:id', controller.update, views.handleUpdate)
  .delete('/:id', controller.destroy, views.handleDestroy);

module.exports = responseRouter;
