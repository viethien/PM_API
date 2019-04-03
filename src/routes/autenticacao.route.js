module.exports = function (app) {
    app.post('/autenticar', function (req, res, next) {
        app.src.controllers.autenticacao.autenticar(app, req, res)
    });
}