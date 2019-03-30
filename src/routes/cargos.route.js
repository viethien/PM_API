const { CargosDAO } = require('../models/cargos.model')
const { Conexao } = require('../config/conexao')
module.exports = function (app) {
    app.get('/cargos', function (req, res) {
        var conexao = new Conexao()
        const cargos = new CargosDAO()

        cargos.getCargos(conexao, (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    });
    app.get('/cargos/detalhe/:cargo', function (req, res) { // aqui funciona
        var conexao = new Conexao()
        const cargos = new CargosDAO()
        cargos.getCargoDetalhe(conexao, req.params.cargo, (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    });

    app.post('/cargos/salvar', function (req, res) {  //aqui da Cannot POST /cargos/novo/

        var conexao = new Conexao()
        const cargos = new CargosDAO()
        console.log(req.body)
        var cargo = req.body

        cargos.cadastrarCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err.errno))
            } else {
                res.json(conexao.trataSucesso(result.affectedRows))
            }
        })
    });

    app.delete('/cargos/delete/:cargo', function (req, res) {  //aqui da Cannot POST /cargos/novo/
        var conexao = new Conexao()
        const cargos = new CargosDAO()

        var cargo = req.params.cargo

        cargos.deleteCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err.errno, err))
            } else {
                //res.json(result)
                res.json(conexao.trataSucesso(result.affectedRows))
            }
        })
    });
} 