var express = require('express'),
    bodyparser = require('body-parser'),
    validator = require('express-validator'),
    session = require('express-session'),
    app = express();

var consign = require('consign');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(validator())
app.use(session({
    secret: 'iau#$%#$Hgs@#t4',
    resave: false,
    saveUninitialized: false
}))

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .then('./src/config/conexao.js')
    .then('./src/models')
    .then('./src/utils')
    .into(app);


app.listen(3000, function () {
    console.log("Servidor ON");
});

module.exports = app;