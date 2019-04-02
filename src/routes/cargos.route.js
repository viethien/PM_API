module.exports = function (app) {
    app.get('/cargos', function (req, res) {
     if(req.session.visualizacargos){
        app.src.controllers.cargos.getCargos(app, req, res)
     } else{
         let msg = {
             msg: "Acesso Negado"
         }        
         res.send(msg) 
     }
        
    });
    app.get('/cargos/detalhe/:cargo', function (req, res) {
        app.src.controllers.cargos.getCargo(app, req, res)
    });

    app.post('/cargos/salvar', function (req, res) {
        app.src.controllers.cargos.salvarCargo(app, req, res)
    });

    app.delete('/cargos/delete/:cargo', function (req, res) {
        app.src.controllers.cargos.deletarCargo(app, req, res)
    });

    app.put('/cargos/atualizar/', function (req, res) {
        app.src.controllers.cargos.atualizarCargo(app, req, res)
    });
    app.get('/aqui', function (req, res) {
        res.send("passei aqui")
    });

} 