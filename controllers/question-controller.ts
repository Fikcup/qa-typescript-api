export {};
import { Request, Response } from 'express';
const { Question } = require('../models');

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
}

module.exports = questionController;