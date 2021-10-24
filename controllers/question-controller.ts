export {};
import { Request, Response } from 'express';
const { Question } = require('../models');

const questionController = {
    // Users can look at a list of all questions
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
    // Users can search for a specific question
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
    // Users can create their own questions
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
    // Users can update their question
    updateQuestion(req: Request, res: Response) {
        Question.update(req.body, {
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
    // Users can delete their questions
    deleteQuestion(req: Request, res: Response) {
        Question.destroy({
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
}

module.exports = questionController;