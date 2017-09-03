var img = document.getElementById('madi');
var marginLeft = 0 ;

function move(){
    if(img.style.marginLeft == 1600 +'px'){
        marginLeft = -1600;
    }
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(move,100);
};