var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.pretty = true;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'jade');
app.set('views', './views');


app.get('/template', function(req, res){
    res.render('temp', {time:Date(),_title:'안녕 타이틀이야'});
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

app.get('/topic/:id', function(req, res){
    var topics = ['word0', 'word1', 'word2'];

    var output = `
        <a href="/topic?id=0">word0</a><br>
        <a href="/topic?id=1">word1</a><br>
        <a href="/topic?id=2">word2</a><br><br><br>
        ${topics[req.params.id]}
    `
    res.send(output);

});

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id + ' ::: ' + req.params.mode);
});


app.get('/form', function(req, res){
    res.render('form');
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + " ::: " + description);
});














app.listen(3000, function(){   
    console.log("Conneted 3000");
});