// Image Animation 
var img = document.getElementById('madi');
var marginLeft = 0 ;
function move(){
    if(img.style.marginLeft == 2000 +'px'){
        marginLeft = -2000;
    }
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(move,50);
};


// counter Code
var counter = 0;
function load_counter() {
    // Creating request Object.
    var request = new XMLHttpRequest();
    
    // request state change
    
    request.onreadystatechange = function() {
        if(request.status == 200)
        
    };
    
    
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}