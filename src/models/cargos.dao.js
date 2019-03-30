class CargosDAO {
    constructor() {

    }

    getCargos(conexao, callback) {
        conexao.connection.query('select * from cargos', callback)
        conexao.connection.end()
    }

    getCargoDetalhe(conexao, cargo, callback) {
        conexao.connection.query('select * from cargos where cargo = ?', cargo, callback)
        conexao.connection.end()
    }

    cadastrarCargo(conexao, cargo, callback) {
        conexao.connection.query("insert into cargos set ?",
            cargo,
            callback)
        conexao.connection.end()
    }
    cadastrarCargo(conexao, cargo, callback) {
        conexao.connection.query("insert into cargos set ?",
            cargo,
            callback)
        conexao.connection.end()
    }

    deleteCargo(conexao, cargo, callback) {
        conexao.connection.query('delete from cargos where cargo = ?', cargo, callback)
        conexao.connection.end()
    }
    atualizaCargo(conexao, cargo, callback) {
        console.log(cargo.cargo)
        conexao.connection.query('UPDATE cargos SET descricao = ?, nome = ?, sigla = ? WHERE cargo = ?',
            [cargo.descricao,
            cargo.nome,
            cargo.sigla,
            cargo.cargo],
            callback)
    }
}
module.exports = { CargosDAO }

