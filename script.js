var num=document.getElementById("num");
var add=document.getElementById("add");
var subtract=document.getElementById("subtract");
var count=0;

add.addEventListener("click",()=>{
count+=1;
num.textContent=count;
});
subtract.addEventListener("click",()=>{
count-=1;
num.textContent=count;    
});