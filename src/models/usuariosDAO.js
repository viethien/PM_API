class UsuariosDAO {
    constructor() {

    }
    autenticar(conexao, dadosusuario, callback) {
        conexao.connection.query(`SELECT u.usuario, u.email, u.senha, p.*
            FROM usuarios u INNER JOIN perfis_usuarios p on p.perfil = u.id_perfil 
            where email = ? and senha =?`,
            [dadosusuario.email,
            dadosusuario.senha],
            callback)
        conexao.connection.end()
    }
}
module.exports = { UsuariosDAO }
