let request = require('request')
let config = require('config')
let appKey = config.get('App-key')
let urlValue = config.get('url')
let headersValue = {
                    'Content-Type': 'application/json',
                    'X-Auth-App-Key': appKey
                   }

exports.getClients = function(req, res) {

    const options = {  
        url: urlValue + '/clients',
        method: 'GET',
        headers: headersValue
    };

    request(options, function(err, res, body) {  
        let json = JSON.parse(body);
        console.log(json);
    });

    console.log("Le get fonctionne")
    res.send('Le getClients  à fonctionné')

}

exports.getClient = function(req, res, $scope) {

    const options = {  
        url: urlValue + '/clients/4/contacts',
        method: 'GET',
        headers: headersValue
    };

    request(options, function(err, res, body) {  
        let json = JSON.parse(body);
        console.log(json);
    });

    console.log($scope.email)
    console.log("Le get fonctionne")
    res.send('Le getClient  à fonctionné')

}

exports.onSave = function(req, res){
    console.log("Bonjour onSave")
}

exports.postClient = function(req, res) {   

    const options = {  
        url: urlValue + '/clients',
        method: 'POST',
        headers: headersValue,
        json: req.body
    };
    
    request(options, function(err, response, body) {  
       if (err) {
           console.error(err);
           res.status(400).json(err);
       }else {

           if (body.code >= 300) {
            res.status(400).json(body.errors);
           }else {
            res.status(200).json(body);
           }           
       }
    });

    
}                   