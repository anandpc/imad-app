console.log('Loaded!');

var img = document.getElementById('madi');

function moveRight(){
  var marginLeft = marginLeft + 10;
  marginLeft.style = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
    img.style.marginLeft = '100px';
};