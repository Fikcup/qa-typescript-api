export {};
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { auth } = require('express-openid-connect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// middleware
app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// application routing
app.use(routes);

// once database is synced, application starts
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});