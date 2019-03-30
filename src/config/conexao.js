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

    trataErros(errnumber, errObj) {
        var msg
        var mensagem = err;
        switch (mensagem) {
            case 1451:
                msg = "Já existem entidades vinculadas a este este registro, você não pode excluí-lo"
                return msg
                break;
            default:
                msg = "Erro não mapeado. COD:" + errorObj.errno + "Mensagem: " + errObj.message;
        }
    }

    trataSucesso(linhas_afetadas) {
        let msgSuccess;
        if (linhas_afetadas >= 1) {
            msgSuccess = "Procedimento executado com sucesso, " + linhas_afetadas + " linhas afetadas."
        } else if (linhas_afetadas == 0) {
            msgSuccess = "Não existem dados para os parametros escolhidos, linhas afetadas: " + linhas_afetadas;
        }
        return msgSuccess
    }
}

module.exports = { Conexao }