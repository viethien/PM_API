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
        //res.send(req.body)
        //console.log(req.body)
        var conexao = new Conexao()
        const cargos = new CargosDAO()

        var cargo = req.body

        cargos.cadastrarCargo(conexao, cargo, (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.send(result)
            }
        })
    });
} 