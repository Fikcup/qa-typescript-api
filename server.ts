export {};
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { auth } = require('express-openid-connect');

const app = express();
const PORT = 3001;

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3001',
  clientID: 'I2h5nHlc31AzOYhkqxTg8Y63wqF4w5HN',
  issuerBaseURL: 'https://dev-ha1x5aag.us.auth0.com'
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