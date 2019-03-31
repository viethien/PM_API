module.exports.autenticar = function (app, req, res) {
    var validacoes = require('../utils/validacoes')
    var valido = validacoes.validaUsuario(app, req)
    res.send(valido)
}