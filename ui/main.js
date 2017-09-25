// Image Animation 
var img = document.getElementById("madi");
var marginLeft = 0 ;
function move(){
    if(img.style.marginLeft == 2000 +'px'){
        marginLeft = -2000;
    }
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick  = function (){
    var interval = setInterval(move,50);
};

// counter Code
function load_counter() {
    // Creating request Object.
    var request = new XMLHttpRequest();
    
    // Response to the request on state change
        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE) {
                if(request.status == 200){
                    var counter = 50;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
        };
        // Make a request
        request.open('GET', 'http://anandpc13.imad.hasura-app.io/counter',true);
        request.send(null);
}

// Submit Names
var nameInput = document.getElementById("name");
function submit(){
    var name1 = nameInput.value;    
    // Make request to Server and Send Names
    var request = new XMLHttpRequest();
    // Response to the request on state change
        request.onreadystatechange = function() {
            if(request.readyState == XMLHttpRequest.DONE) {
                if(request.status == 200){
                    // Capture the Name and render it as list
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for(var i=0;i<names.length;i++){
                        list += '<li>' + names[i] + '</li>';
                    }
                    var ul = document.getElementById("namelist");
                    ul.innerHTML = list ;
                }
            }
        };
        // Make a request
        request.open('GET', 'http://anandpc13.imad.hasura-app.io/submit?name='+ name1,true);
        request.send(null);
}   