module.exports.validaCargo = function (app, req) {
    req.assert('descricao', 'Descrição é Obrigatória').notEmpty()
    req.assert('descricao', 'A Descrição deve ter entre 5 e 255 caracteres').len(5, 255)
    req.assert('sigla', 'Sigla é obrigatória!').notEmpty()
    req.assert('sigla', 'A Sigla deve ter entre 2 e 10 caracteres.').len(2, 10)
    req.assert('nome', 'O Campo Nome é obrigatório!').notEmpty().len(3, 30)
    req.assert('nome', 'O Nome deve conter, entre 3 e 30 caracteres.').len(3, 30)

    var errosValidacaoCargo = req.validationErrors();
    console.log("Errosvalidacargo é: ", errosValidacaoCargo)
    if (errosValidacaoCargo === false) {
        return true
    } else {
        return errosValidacaoCargo
    }
}

module.exports.validaUsuario = function (app, req) {
    console.log(req.body)
    req.assert('email', 'Preencha o campo E-mail').notEmpty()
    req.assert('email', 'E-mail inválido').isEmail()
    req.assert('senha', 'Preencha o campo Senha').notEmpty()
    req.assert('senha', 'A Senha deve conter entre 8 e 30 caracteres').len(8, 30)
    var errosValidacaoUsuario = req.validationErrors();

    if (errosValidacaoUsuario === false) {
        return true
    } else {
        return errosValidacaoUsuario
    }
}