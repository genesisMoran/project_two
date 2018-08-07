module.exports = {
    showAll(req, res) {
      res.render('responses/response-index');
    },
    showOne(req, res) {
      res.render('responses/response-one');
    },
    showBlankForm(req, res) {
      res.render('responses/response-add');
    },
    showEditForm(req, res) {
      res.render('responses/response-edit');
    },
    handleCreate(req, res) {
      res.redirect('/responses');
    },
    handleUpdate(req, res) {
      res.redirect(`/responses/${req.params.id}`);
    },
    handleDestroy(req, res) {
      res.redirect('/responses');
    },
    show404(err, req, res, next) {
      console.log({ err });
      res.render('404');
    }
};
