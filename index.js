var express = require('express');
var app = express();
var useragent = require('express-useragent');

var PORT = process.env.PORT || 8080;

app.use(useragent.express());
app.get('/', function(req, res){
    var headers = req.headers;
    var ip = req.ip;
    var language = (headers['accept-language']).split(',')[0];
    var os = req.useragent.os;

    res.send({
        ipaddress: ip,
        language: language,
        os: os
    });
});


app.listen(PORT);
console.log('Service listening on port 8080');
