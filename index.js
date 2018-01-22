var app = require('./api/config/custom-express')()


    app.listen(3000,function(){
        console.log('Iniciando server...')
    })

    // ROTAS
    app.get('/', function(req, res){
        res.sendFile('app/index.html', {root: __dirname })
    })

    app.get('/inserir.html', function(req, res){
        res.sendFile('app/inserir.html', {root: __dirname })
    })

    app.get('/consultar.html', function(req, res){
        res.sendFile('app/consultar.html', {root: __dirname })
    })

   