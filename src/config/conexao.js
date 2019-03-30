const mysql = require('mysql');

class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'agimplant'
        });
        this.connect()
    }
    connect() {
        this.connection.connect((err) => {
            if (!!err) {
                console.log("Não consegui me conectar, COD DE ERRO: ", err.code, ", MENSAGEM:", err.message)
            } else {
                console.log("Connected")
            }

        })
    }
}

module.exports = { Conexao }