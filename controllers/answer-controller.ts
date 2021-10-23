export {};
import { Request, Response } from 'express';
const { Answer } = require('../models');

// TODO : Create a user association with the answer
// TODO : Create a question association with the answer

const answerController = {
    getAllAnswers(req: Request, res: Response) {
        Answer.findAll()
            .then((answerData: Object) => {
                res.json(answerData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneAnswer(req: Request, res: Response) {
        Answer.findOne({
            where: {
                uuid: req.params.answerId
            }
        })
            .then((answerData: Object) => {
                res.json(answerData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createAnswer(req: Request, res: Response) {
        Answer.create(req.body)
            .then((answerData: Object) => {
                res.json(answerData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    updateAnswer(req: Request, res: Response) {
        Answer.update(req.body, {
            where: {
                uuid: req.params.answerId
            }
        })
            .then((answerData: Object) => {
                res.json(answerData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = answerController;