export {};
import { Request, Response } from 'express';
const { Answer } = require('../models');

const answerController = {
    // Users can see all answers associated with a question
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
    // Users can view a specific answer to a question
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
    // Users can answer questions
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
    // Users can update their own answers
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
    },
    // Users can delete their answers
    deleteAnswer(req: Request, res: Response) {
        Answer.destroy({
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
};

module.exports = answerController;