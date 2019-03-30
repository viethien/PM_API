module.exports = function (app) {
    app.get('/', function (req, res) {

        console.log("I'm on the home.js and still have data +", app.src.models.Home)
        var conexao = app.src.config.db()
        var homeData = new app.src.models.Home();

        homeData.getHomeData(conexao, (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    });
} 