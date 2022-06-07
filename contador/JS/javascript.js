var intervalo=null;
 
var contador=0;

var start=document.getElementById("start");
var pause=document.getElementById("pause");
var resert=document.getElementById("resert");
var countUp=document.getElementById("countUp");
var contDown=document.getElementById("countDown");

 


 

start.addEventListener("click",function(){
    contador=parseInt(document.getElementById("setTo").value);
    console.log(contador);
    intervalo=setInterval(countStart,1000);
});

function countStart(){
    contador+=parseInt(document.getElementById("step").value);
    var insert=document.getElementById("valor");
    insert.innerHTML=contador;
}
pause.addEventListener("click",function(){
    clearInterval(intervalo);
});
resert.addEventListener("click",function(){
    clearInterval(intervalo);
    var insert=document.getElementById("valor");
    contador=0;
    insert.innerHTML=contador;
});
countUp.addEventListener("click",function(){
    clearInterval(intervalo);
    intervalo=setInterval(countStart,1000);
});
contDown.addEventListener("click",function(){
    clearInterval(intervalo);
    contador=parseInt(document.getElementById("setTo").value);
    intervalo=setInterval(countDown,1000);
});
function countDown(){
    contador-=parseInt(document.getElementById("step").value);
    var insert=document.getElementById("valor");
    insert.innerHTML=contador;
};