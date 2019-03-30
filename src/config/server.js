var express = require('express'),
    bodyparser = require('body-parser'),
    app = express();

var consign = require('consign');


consign()
    .include('./src/routes')
    .then('./src/config/db.js')
    .then('./src/models')
    .into(app);

console.log("I'm on server.js: ", app.src.models)
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Servidor ON");
});

module.exports = app;