module.exports.autenticar = function (app, req, res) {

    var valido = app.src.utils.functions.validaUsuarioLogin(app, req);
    if (valido == true) { //true significa que não deu erro
        const conexao = new app.src.config.conexao.Conexao(),
            usuario = new app.src.models.usuariosDAO.UsuariosDAO()
        let dadosusuario = req.body;

        usuario.autenticar(conexao, dadosusuario, (err, result) => {
            if (err) {
                res.json(conexao.trataErros(err))
            } else if (result.length != 0) {
                //Permissoes Gerais
                req.session.exibecadastros = result[0].exibecadastros
                //Permissoes para Tarefas
                req.session.aprovatarefa = result[0].aprovatarefa;
                req.session.cancelatarefa = result[0].cancelatarefa
                req.session.alteratarefa = result[0].alteratarefa
                req.session.criatarefa = result[0].criatarefa
                //Permissao para Cargos
                req.session.criacargo = result[0].criacargo
                req.session.atualizacargo = result[0].atualizacargo
                req.session.deletacargo = result[0].deletacargo
                req.session.visualizacargos = result[0].visualizacargos
                res.send(req.session) //here we have data from the variables above


            }
            else {
                let msg = {
                    msg: "Nenhum usuario encontrado com essas informações."
                }
                res.send(msg)
            }
        }) //saindo da função de autenticação
    } else {
        res.send(valido)
    }
}