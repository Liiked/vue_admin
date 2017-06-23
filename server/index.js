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

app.get('/main', function(req, res) {
    res.json({
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        title: '乱数假文'
    })
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