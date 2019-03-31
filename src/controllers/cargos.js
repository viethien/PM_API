const { CargosDAO } = require('../models/cargos.dao')
const { Conexao } = require('../config/conexao')

module.exports.getCargos = function (app, req, res) {
    var conexao = new Conexao()
    const cargos = new CargosDAO()

    cargos.getCargos(conexao, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err.errno, err))
        } else {
            //res.json(result)
            res.json(conexao.trataSucesso(result.affectedRows))
        }
    })
}

module.exports.getCargo = function (app, req, res) {
    var conexao = new Conexao()
    const cargos = new CargosDAO()
    cargos.getCargoDetalhe(conexao, req.params.cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err.errno, err))
        } else {
            //res.json(result)
            res.json(conexao.trataSucesso(result.affectedRows))
        }
    })
}

module.exports.salvarCargo = function (app, req, res) {
    var conexao = new Conexao()
    const cargos = new CargosDAO()
    var cargo = req.body
    req.assert('descricao', 'Descrição é Obrigatória!').notEmpty().len(5, 255)
    req.assert('sigla', 'Sigla é obrigatória e deve ter entre 2 e 10 caracteres!').notEmpty().len(2, 10)
    req.assert('nome', 'Nome é obrigatório e deve conter, no máximo 30 caracteres!').notEmpty().len()

    var errosValidacao = req.validationErrors();

    if (errosValidacao != null) {
        res.send(errosValidacao)

    } else {
        cargos.cadastrarCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err.errno, err))
            } else {
                //res.json(result)
                res.json(conexao.trataSucesso(result.affectedRows))
            }
        })
    }

}

module.exports.deletarCargo = function (app, req, res) {
    var conexao = new Conexao()
    const cargos = new CargosDAO()

    var cargo = req.params.cargo

    cargos.deleteCargo(conexao, cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err.errno, err))
        } else {
            //res.json(result)
            res.json(conexao.trataSucesso(result))
        }
    })
}

module.exports.atualizarCargo = function (app, req, res) {
    console.log(req.body)
    var conexao = new Conexao()
    const cargos = new CargosDAO()
    var cargo = req.body

    cargos.atualizaCargo(conexao, cargo, (err, result) => {
        if (err) {
            //res.json(err)
            res.json(conexao.trataErros(err))
        } else {

            //res.json(result)
            res.json(conexao.trataSucesso(result))
        }
    })
}