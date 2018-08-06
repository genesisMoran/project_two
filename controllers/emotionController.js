// NOT SURE IF emotion Emotion IS THE RIGHT WORD/TABLE
    // REMEMBER TO CHANGE whatever
const emotionModel = require('../../models/Emotion');

module.exports = {
    index(req, res, next) {
        emotionModel.findAll()
        .then((emotions) => {
            res.locals.emotions = emotions;
            next();
        })
        .catch(err => next(err));
    },

    makeBlankEmotion(req, res, next) {
    const emotion = {
        whatever: '',
        whatever2: '',
    };
    // why no .catch ? ask JZ
    res.locals.emotion = emotion;
    next();
    },

    findOne(req, res, next) {
        const { id } = req.params;
        emotionModel.findOne(id)
        .then((emotion) => {
            res.locals.emotion = emotion;
            next();
        })
        .catch(err => next(err));
    },

    create(req, res, next) {
        const emotionData = req.body;
        emotionModel.create(emotionData)
        .then((emotion) => {
            res.locals.emotion = emotion;
            next();
        })
        .catch(err => next(err));
    },

    destroy(req, res, next) {
        const { id } = req.params;
        emotionModel.delete(id)
        .then(() => next())
        .catch(err => next(err));
    },

    update(req, res, next) {
        const { id } = req.params
        const emotionData = req.body;

        emotionModel.update(id, emotionData)
        .then(() => next ())
        .catch(err => next(err));
    }
};
