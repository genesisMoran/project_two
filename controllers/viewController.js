module.exports = {
    showAll(req, res) {
        res.render('emotions/showAll');
    },

    showOne(req, res) {
        res.render('emotions/showOne');
    },

    showEdit(req, res) {
        res.render('emotions/showEdit');
    },

    handleCreate(req, res) {
        const { emotion_id } = res.locals.emotion;
        res.direct(`/emotions/${emotion_id}`);
    },

    handleDestroy(req, res) {
        res.direct('/emotions');
    },

    handleUpdate(req, res) {
        const { id } = req.params;
        res.redirect(`/emotions/${id}`);
    },

    showNew(req, res) {
        res.render('emotions/showNew');
    },

    show404(req, res) {
        res.send(404);
    },
};
