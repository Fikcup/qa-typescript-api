export {};
import { Request, Response } from 'express';
const { Answer } = require('../models');

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
};

module.exports = answerController;