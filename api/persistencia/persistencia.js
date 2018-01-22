var MongoClient =  require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

module.exports = {

    Inserir : function (pagamento, res) {

        MongoClient.connect(url, function (err, db) {
            console.log('MongoDB conectado!')
            var dbo = db.db("mydb");
    
                dbo.collection("pagamentos").insertOne(pagamento, function(err, docs) {
                    if (err) throw err;
                        db.close();
                        console.log('INSERIU COM SUCESSO')
                        res.status(201).json(pagamento)              
                })
        })
    },

    Consultar : function (forma_de_pagamento, res) {
        MongoClient.connect(url, function (err, db) {
            console.log('MongoDB conectado!')
        
            var dbo = db.db("mydb");
                dbo.collection("pagamentos").find({forma_de_pagamento}).toArray( function(err, docs) {
                    if (err) throw err;
                    console.log('retornou com sucesso');
                    res.json(docs)
                    db.close();     
                })
        })
    }
   
}
  
