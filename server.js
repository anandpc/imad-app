var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

// database connectivity
var Pool = require('pg').Pool;

var config = {
  user: 'anandpc13',
  host: 'http://db.imad.hasura-app.io',
  database: 'anandpc13',
  port: '5432',
  password: process.env.DB_PASSWORD
};


function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var img = data.img;
    var content = data.content;
    
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name ="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        
        <body>
            <div class="container">
    
                <a href="/">Home</a>
                <hr>
             
                ${heading}
                
                <div class=image>
                    ${img}
                </div>
            
                <div class="para">
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}


var pool = new Pool(config);
//database
app.get('/db', function(req, res){
    // make a select request
    pool.query('select * from article', function(err, result){
       if(err) {
           res.status(501).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
    });
    
});

// submit name
var names = [];
app.get('/submit', function(req, res){
    // get the names from the request object
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names)); // Responding Javascript object as string.
});

// counter
var counter = 0;
app.get ('/counter', function(req, res){
    counter += 1;
    res.send(counter.toString());
});

// express framework url mapping
app.get('/:pageName', function (req, res){
    var pageName = req.params.pageName;
    res.send(createTemplate(pages[pageName]));
    
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
