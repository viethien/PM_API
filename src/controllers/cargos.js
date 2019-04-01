module.exports.getCargos = function (app, req, res) {

    const conexao = new app.src.config.conexao.Conexao(),
        cargos = new app.src.models.cargosDAO.CargosDAO()
    cargos.getCargos(conexao, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            res.json(result)
        }
    })
}

module.exports.getCargo = function (app, req, res) {
    const conexao = new app.src.config.conexao.Conexao(),
        cargos = new app.src.models.cargosDAO.CargosDAO()
    cargos.getCargoDetalhe(conexao, req.params.cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            res.json(result)
        }
    })
}

module.exports.salvarCargo = function (app, req, res) {

    var valido = app.src.utils.functions.validaCargo(app, req);

    if (valido == true) { //true significa que nao deu erro
        const conexao = new app.src.config.conexao.Conexao(),
            cargos = new app.src.models.cargosDAO.CargosDAO()

        let cargo = req.body
        cargos.salvarCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err))
            } else {

                res.json(conexao.trataSucesso(result))
            }
        })
    } else {
        res.send(valido)
    }

}

module.exports.atualizarCargo = function (app, req, res) {
    var valido = app.src.utils.functions.validaCargo(app, req);
    if (valido == true) { //true significa que nao deu erro
        const conexao = new app.src.config.conexao.Conexao(),
            cargos = new app.src.models.cargosDAO.CargosDAO()

        let cargo = req.body

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
    const conexao = new app.src.config.conexao.Conexao(),
        { CargosDAO } = require('../models/cargosDAO'),
        cargos = new CargosDAO();
    var cargo = req.params.cargo

    cargos.deleteCargo(conexao, cargo, (err, result) => {
        if (err) {
            res.json(conexao.trataErros(err))
        } else {
            res.json(conexao.trataSucesso(result))
        }
    })
}


