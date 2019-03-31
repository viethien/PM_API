const { CargosDAO } = require('../models/cargos.dao')


module.exports.getCargos = function (app, req, res) {
    var conexao = new app.src.config.conexao.Conexao()
    const cargos = new CargosDAO()

    cargos.getCargos(conexao, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            res.json(result)
        }
    })
}

module.exports.getCargo = function (app, req, res) {
    var conexao = new app.src.config.conexao.Conexao()
    const cargos = new CargosDAO()
    cargos.getCargoDetalhe(conexao, req.params.cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            res.json(result)
        }
    })
}

module.exports.salvarCargo = function (app, req, res) {
    const validacao = require('../utils/validacoes')
    var cargo = req.body
    var valido = validacao.validaCargo(app, req);

    if (valido == true) { //true significa que deu erro
        var conexao = new app.src.config.conexao.Conexao()
        var cargos = new CargosDAO()
        cargos.salvarCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err))
            } else {
                //res.json(result)
                res.json(conexao.trataSucesso(result))
            }
        })
    } else {
        res.send(valido)
    }

}

module.exports.atualizarCargo = function (app, req, res) {
    const validacao = require('../utils/validacoes')
    var cargo = req.body
    var valido = validacao.validaCargo(app, req);

    if (valido == true) { //true significa que deu erro
        var conexao = new app.src.config.conexao.Conexao()
        var cargos = new CargosDAO()
        cargos.atualizaCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err))
            } else {
                //res.json(result)
                res.json(conexao.trataSucesso(result))
            }
        })
    } else {
        res.send(valido)
    }
}

module.exports.deletarCargo = function (app, req, res) {
    var conexao = new app.src.config.conexao.Conexao()
    const cargos = new CargosDAO()
    var cargo = req.params.cargo

    cargos.deleteCargo(conexao, cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            //res.json(result)
            res.json(conexao.trataSucesso(result))
        }
    })
}


