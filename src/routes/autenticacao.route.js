module.exports = function (app) {
    app.post('/autenticar'), (req, res) => {
        console.log('to aqui')
        res.send("to aqui")
    }
}