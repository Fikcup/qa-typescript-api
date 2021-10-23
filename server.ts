export {};
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const app = express();
const PORT = 3001;

// JSON web token for Auth0
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-ha1x5aag.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3001',
  issuer: 'https://dev-ha1x5aag.us.auth0.com/',
  algorithms: ['RS256']
});

// middleware
app.use(jwtCheck);
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