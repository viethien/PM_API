var express = require('express'),
    bodyparser = require('body-parser'),
    app = express();

var consign = require('consign');
//app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
consign()
    .include('./src/routes')
    // .then('./src/config/db.js')
    // .then('./src/models')
    .into(app);




app.listen(3000, function () {
    console.log("Servidor ON");
});

module.exports = app;