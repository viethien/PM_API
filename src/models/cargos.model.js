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

    }
}
module.exports = { CargosDAO }

