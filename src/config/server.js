var express = require('express'),
    bodyparser = require('body-parser'),
    validator = require('express-validator'),
    app = express();

var consign = require('consign');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(validator())

consign()
    .include('./src/routes')
    .then('./src/controllers')
    .then('./src/config/conexao.js')
    .into(app);

app.listen(3000, function () {
    console.log("Servidor ON");
});

module.exports = app;