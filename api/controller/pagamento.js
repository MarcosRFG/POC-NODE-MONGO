module.exports = function(app){
    var persistencia = require('../persistencia/persistencia')

    app.post('/inserir', function (req, res) {
        req.assert('forma_de_pagamento', 'forma de pagamento NULO').notEmpty()
        req.assert('valor', 'o valor deve ser númerico').isFloat()
        var erros = req.validationErrors()

        if(erros){
            res.status(400).send(erros)
            console.log('Erros de validações encontrados')
            return
        }

        console.log('requisição INSERIR VALIDA')
        var pagamento = req.body
        pagamento.data = new Date
        persistencia.Inserir(pagamento, res)   
    })

    app.post('/consultar', function (req, res) {
        console.log('requisição CONSULTAR aceita')

        req.assert('forma_de_pagamento', 'forma de pagamento NULO').notEmpty()
        var erros = req.validationErrors()

        if(erros){
            res.status(400).send(erros)
            console.log('Erros de validações encontrados')
            return
        }
        var consultaPagamento = req.body
        var forma_de_pagamento = consultaPagamento.forma_de_pagamento
        persistencia.Consultar(forma_de_pagamento, res)
    })    
}
    