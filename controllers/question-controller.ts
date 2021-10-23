export {};
import { Request, Response } from 'express';
const { Question } = require('../models');

// TODO : Create a user association with the question

const questionController = {
    getAllQuestions(req: Request, res: Response) {
        Question.findAll()
            .then((questionData: Object) => {
                res.json(questionData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneQuestion(req: Request, res: Response) {
        Question.findOne({
            where: {
                uuid: req.params.questionId
            }
        })
            .then((questionData: Object) => {
                res.json(questionData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createQuestion(req: Request, res: Response) {
        Question.create(req.body)
            .then((questionData: Object) => {
                res.json(questionData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}

module.exports = questionController;