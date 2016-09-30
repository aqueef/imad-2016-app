// counter code
var button=document.getElementById('counter');
var counter=0;
button.oneclick= function() {
  var request= new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readystate === XMLHttpRequest.Done) {
          if(request.status===200) {
              var counter= request.responseText;
              var span=document.getElementById('count');
              span.innerHTML =counter.toString();
          }
      
  }
  
};

request.open('GET', 'http://aqueef.imad.hasura-app.io/counter', true);
request.send(null);
};