var randomNum=Math.floor(Math.random()*100)+1;
console.log(randomNum)
var count=0;

var condition1=document.getElementById("hint")
var condition2=document.getElementById("count")
function check(){
    var value=parseInt(document.getElementById("number").value);
    if(value===randomNum){
        condition1.innerHTML="congratulations you got it in"+count+"chances";
    }
    else if(value<=randomNum){
        condition1.innerHTML="Greater than your number";
    }
    else if(value>=randomNum){
        condition1.innerHTML="lesser than your number";
    }
    condition2.innerHTML=count;
    count++
}