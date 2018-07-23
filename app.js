var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/template', function(req, res){
    res.render('temp');
});

app.get('/', function(req,res){
    res.send("Hello home page");
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="idontknow.png">');
});

app.get('/dynamic', function(req, res){

    var lis = '';

    for(var i=0; i<5; i++) {
        lis = lis + '<li>coding</li>';
    }

    var time = Date();

    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hello</title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
});


app.get('/login', function(req, res){
    res.send("Hello Login page");
});

app.listen(3000, function(){   
    console.log("Conneted 3000");
});