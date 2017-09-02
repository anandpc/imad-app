var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var page1 = {
    title: 'Page 1 | Raspberry Pi',
    link: '<a href="/">Home</a>',
    heading: '<h2>Raspberry Pi</h2>',
    img: '<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Raspberry-Pi-3-Flat-Top.jpg" class="img-medium">',
    content: `
                <p>
                    A Raspberry Pi is a credit card-sized computer originally designed for education, inspired by the 1981 BBC Micro. Creator Eben Upton's goal was to create a low-cost device that would improve programming skills and hardware understanding at the pre-university level. But thanks to its small size and accessible price, it was quickly adopted by tinkerers, makers, and electronics enthusiasts for projects that require more than a basic microcontroller (such as Arduino devices).
                </p>
                <p>
                    The Raspberry Pi is slower than a modern laptop or desktop but is still a complete Linux computer and can provides all the expected abilities that implies, at a low-power consumption level.    
                </p>`
};


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

            ${link}
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




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/pages/page1.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'page1.html'));   
});

app.get('/pages/page2.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'page2.html'));
});

app.get('/pages/page3.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'page3.html'));   
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
