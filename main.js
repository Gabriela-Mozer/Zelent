function clock() {
  var today = new Date();
  var day = today.getDate();
  if(day<10) day="0"+day;
  var month = today.getMonth() + 1;
  if(month<10) month="0"+month;
  var year = today.getFullYear();
  var hour = today.getHours();
  if(hour<10) hour="0"+godzina;
  var minutes = today.getMinutes();
  if(minutes<10) minutes="0"+minutes;
  var seconds = today.getSeconds();
  if(seconds<10) seconds="0"+seconds;

  document.getElementById("container").innerHTML =
    day + "/" + month + "/" + year + "|" + hour + ":" + minutes + ":" + seconds;

  setTimeout("clock()", 1000);
}

function check(){
    var num= document.getElementById("pole").value;
    
    if(num>0)document.getElementById("equality").innerHTML="positive";
    else if(num<0)document.getElementById("equality").innerHTML="negative";
    else if(num=="0")document.getElementById("equality").innerHTML="zero";
    else document.getElementById("equality").innerHTML="not a number";
}


function numbers(){
    var num1= document.getElementById("place").value;
    var num2= document.getElementById("place2").value;
    var name = " ";

    for(i=num1;i<=num2;i++){
        name=name + i + " ";
    }
    document.getElementById("stringNumbers").innerHTML=name;
}

var number = Math.floor(Math.random()*5)+1;

function slidechanger(){
number ++;if(number>5)number=1;
var plik ="<img src=\"slajdy/slajd"+number +".png\"/>";
document.getElementById("slider").innerHTML=plik;
setTimeout("slidechanger()",5000  )
}