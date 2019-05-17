const express = require('express');
const app = express();
const client = require('./api/routes/client/client');
let config = require('config');
let routes = require('./api/routes/routes');

app.use('/client', client);

app.use('/', routes)

app.listen(config.port, function(){
    console.log('Ca marche')
    console.log(config.apiName, ':' , config.port);
});