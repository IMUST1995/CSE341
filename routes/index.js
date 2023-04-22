const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Zeir Braidi');
});

module.exports = routes;