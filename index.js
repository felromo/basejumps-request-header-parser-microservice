var express = require('express');
var app = express();
var useragent = require('express-useragent');

var PORT = process.env.PORT || 8080;

app.use(useragent.express());
app.get('/', function(req, res){
    // res.send(req.useragent);
    var headers = req.headers;
    var ip = req.ip;
    var language = headers['accept-language'];
    var os = headers['user-agent'];
    res.send({
        ipaddress: ip,
        language: language,
        os: os
    });
    console.log(JSON.stringify(req.headers));
});


app.listen(PORT);
console.log('Service listening on port 8080');
