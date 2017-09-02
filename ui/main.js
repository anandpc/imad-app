console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0 ; 
var marginRight = 0;

function move(){
    if(marginLeft==1500+'px'){
        marginLeft = 0;
    }
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(move,100);
};