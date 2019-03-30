/*function Home() {

}

Home.prototype.getHomeData = function (conexao, callback) {
    conexao.query('select * from tarefas', callback)
} //IT does not work like the item below, so I will keep using ES6
*/

class Home {
    constructor() {
        console.log('Construi')
    }

    getHomeData(conexao, callback) {
        conexao.query('select * from tarefas', callback)
    }
}
module.exports = new Home()

