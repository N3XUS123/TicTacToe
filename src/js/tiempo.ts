var n = 0;
var l = document.getElementById("number");
window.setInterval(function(){
  l.innerHTML = n;
  n++;
},1000);