let number1=document.getElementById("num1");
let number2=document.getElementById("num2");
let result= document.getElementById("results");


document.getElementById("addition-btn").addEventListener("click", function(){
   result.value=parseInt(number1.value)+parseInt(number2.value);
   // number1.value;
   // number1=Number(number1);
   // number2=document.getElementById("num2").value;
   // number2=Number(number2);
   // result= number1+number2;
   // document.getElementById("results").innerHTML=result;

});
document.getElementById("subtraction-btn").addEventListener("click",function(){
   result.value=parseInt(number1.value)-parseInt(number2.value);
   // number1=document.getElementById("num1").value;
   // number1=Number(number1);
   // number2=document.getElementById("num2").value;
   // number2=Number(number2);
   // result= number1-number2;
   // document.getElementById("results").innerHTML=result;

});
 document.getElementById("multiplication-btn").addEventListener("click", function(){
   result.value=parseInt(number1.value)* parseInt(number2.value);
   // number1=document.getElementById("num1").value;
   // number1=Number(number1);
   // number2=document.getElementById("num2").value;
   // number2=Number(number2);
   // result= number1*number2;
   // document.getElementById("results").innerHTML=result;

});
