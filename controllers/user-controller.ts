export {};
import { Request, Response } from 'express';
const { User } = require('../models');

const userController = {
    // Users can look at a list of other user
    getAllUsers(req: Request, res: Response) {
        User.findAll()
            .then((userData: Object) => {
                res.json(userData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can search for other users and see any questions or answers they have written
    getOneUser(req: Request, res: Response) {
        User.findOne({
            where: {
                uuid: req.params.userId
            }
        })
            .then((userData: Object) => {
                res.json(userData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // A user can create an account
    createUser(req: Request, res: Response) {
        User.create(req.body)
            .then((userData: Object) => {
                res.json(userData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // A user can update their account information
    updateUser(req: Request, res: Response) {
        User.update(req.body, {
            where: {
                uuid: req.params.userId
            }
        })
            .then((userData: Object) => {
                res.json(userData);
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // A user can delete their own account
    deleteUser(req: Request, res: Response) {
        User.destroy({
            where: {
                uuid: req.params.userId
            }
        })
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