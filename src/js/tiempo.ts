var n:number = 0;
var l:any= document.getElementById("number");
window.setInterval(function(){
  l.innerHTML = n;
  n++;
},1000);