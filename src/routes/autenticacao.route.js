module.exports = function (app) {
    app.post('/autenticar', cors(), function (req, res) {
        app.src.controllers.autenticacao.autenticar(app, req, res)
    });
}