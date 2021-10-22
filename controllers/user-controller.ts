export {};
import { Request, Response } from 'express';
const { User } = require('../models');

const userController = {
    getAllUsers(req: Request, res: Response) {
        User.findAll()
            .then((userData: Object) => {
                res.json(userData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = userController;