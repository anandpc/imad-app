var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
    page1: {
            title: 'Page 1 | Raspberry Pi',
            heading: '<h2>Raspberry Pi</h2>',
            img: '<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Raspberry-Pi-3-Flat-Top.jpg" class="img-medium">',
            content: `
                        <p>
                            A Raspberry Pi is a credit card-sized computer originally designed for education, inspired by the 1981 BBC Micro. Creator Eben Upton's goal was to create a low-cost device that would improve programming skills and hardware understanding at the pre-university level. But thanks to its small size and accessible price, it was quickly adopted by tinkerers, makers, and electronics enthusiasts for projects that require more than a basic microcontroller (such as Arduino devices).
                        </p>
                        <p>
                            The Raspberry Pi is slower than a modern laptop or desktop but is still a complete Linux computer and can provides all the expected abilities that implies, at a low-power consumption level.    
                        </p>`
            },
    page2: {
        title: 'Page 2 | Arduino',
        heading: '<h2>Arduino</h2>',
        img: '<img src="http://www.electroschematics.com/wp-content/uploads/2013/01/Arduino-Mega-2560-Pinout.jpg" class="img-medium">',
        content: `
                     <p>
                        Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.
                    </p>
                    <p>
                        Over the years Arduino has been the brain of thousands of projects, from everyday objects to complex scientific instruments. A worldwide community of makers - students, hobbyists, artists, programmers, and professionals - has gathered around this open-source platform, their contributions have added up to an incredible amount of accessible knowledge that can be of great help to novices and experts alike.   
        
                    </p>`
    },
    page3: {
        title: 'About Me | Anand Choudhary',
        heading: '<h2>Anand Choudhary</h2>',
        img: '<img src="http://anandpc13.imad.hasura-app.io/ui/madi.png" class="img-medium">',
        content: `
                    <p>
                        My name is already mentioned up here. I'm a BE Computer Graduate. Started Learning Web Development as of now from IMAD (Introduction to Modern Application Developmet).
                    </p>
                    <p>
                        I myself don't know about my self. I'm on a research to discover myself.<br>
                        That's all. Thank You.
                    </p>
                    `
    }
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
    res.send(createTemplate(page1));
});

app.get('/pages/page2.html', function(req, res) {
    res.send(createTemplate(page2));
});

app.get('/pages/page3.html', function(req, res) {
    res.send(createTemplate(page3));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
