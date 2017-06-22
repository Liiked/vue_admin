var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.use('/css', express.static(__dirname + '/build/css'))
app.use('/js', express.static(__dirname + '/build/js'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/build/" + "index.html");
    req.query
})


app.post('/login', function(req, res) {
    console.log(req.body);
    res.json({ msg: '成功', status: 200 })
})

var server = app.listen(8088, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('The example listening at http://', host, port);

})