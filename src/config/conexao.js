const mysql = require('mysql');

class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'mysql995.umbler.com',
            user: 'apiuser',
            password: 'kUJgd2AMBbR7VNE',
            database: 'projectmanager'
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
        let msg;
        switch (errorObj.errno) {
            case 1451:
                msg = {
                    msg: "Já existem entidades vinculadas a este este registro, você não pode excluí-lo"
                }
                break;
            default:
                msg = {
                    msg: "Erro não mapeado. COD:" + errorObj.errno + "Mensagem: " + errorObj.message
                }
        }
        return msg
    }

    trataSucesso(result) {
        let msg;
        if (result.affectedRows >= 1) {
            msg = {
                msg: "Procedimento executado com sucesso, " + result.affectedRows + " linhas afetadas. "
            }
        } else if (result.affectedRows == 0) {
            msg = {
                msg: "Não existem dados para os parametros escolhidos, linhas afetadas: " + result.affectedRows
            }
        } else if (result.length <= 0) {
            msg = {
                msg: "Não foi encontrada nenhuma informação com os parametros informados"
            }
        }
        return msg
    }
}

module.exports = { Conexao }