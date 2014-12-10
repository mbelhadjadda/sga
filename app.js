var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile("client/index.html", {
        "root": __dirname
    });
})

app.use(express.static(__dirname + '/client/front'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/src', express.static(__dirname + '/client/src'));

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Lancement de l\'application http://%s:%s', host, port);

})