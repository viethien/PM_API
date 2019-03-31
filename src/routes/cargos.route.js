module.exports = function (app) {
    app.get('/cargos', function (req, res) {
        app.src.controllers.cargos.getCargos(app, req, res)
    });
    app.get('/cargos/detalhe/:cargo', function (req, res) { // aqui funciona
        app.src.controllers.cargos.getCargo(app, req, res)
    });

    app.post('/cargos/salvar', function (req, res) {  //aqui da Cannot POST /cargos/novo/
        app.src.controllers.cargos.salvarCargo(app, req, res)
    });

    app.delete('/cargos/delete/:cargo', function (req, res) {
        app.src.controllers.cargos.salvarCargo()
    });

    app.put('/cargos/atualizar/', function (req, res) {
        app.src.controllers.cargos.atualizarCargo(app, req, res)
    });
} 