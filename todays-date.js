var date=new Date();
var month=date.getMonth()+1;/*----index start from 0------*/
var today =date.getDate();
var year=date.getFullYear();

document.getElementById("one").innerHTML="Date: "+today+".0"+ month+"."+year;
console.log(date);