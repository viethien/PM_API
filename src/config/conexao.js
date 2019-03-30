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

    trataErros(errorObj) {
        console.log("To aqui", errorObj)
        var msgUsuario
        switch (errorObj.errno) {
            case 1451:
                msgUsuario = "Já existem entidades vinculadas a este este registro, você não pode excluí-lo"
                break;
            default:
                msgUsuario = "Erro não mapeado. COD:" + errorObj.errno + "Mensagem: " + errorObj.message;
        }
        return msgUsuario
    }

    trataSucesso(result) {
        console.log(result.affectedRows)
        let msgSuccess;
        if (result.affectedRows >= 1) {
            msgSuccess = "Procedimento executado com sucesso, " + result.affectedRows + " linhas afetadas."
        } else if (result.affectedRows == 0) {
            msgSuccess = "Não existem dados para os parametros escolhidos, linhas afetadas: " + result.affectedRows;
        }
        return msgSuccess
    }
}

module.exports = { Conexao }