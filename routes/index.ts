export {};
import { Request, Response } from 'express';

const router = require('express').Router();
const apiRoutes = require('./api');

// route /api
router.use('/api', apiRoutes);

router.use('/', (req: any, res: any) => {
    console.log(req.oidc.isAuthenticated());
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.use((req: Request, res: Response) => {
    return res.send('Wrong route!');
});

module.exports = router;