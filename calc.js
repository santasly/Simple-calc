class Calc{
     numbers(numm1 , num2) {
        // numm1 =10;
        // num2 = 20;  
    }
    add(){
    return numm1 + num2;
   }
    subtract(){
   return num2 - numm1;
   }
    multiply(){
   return num2*numm1 ;
   }
}
function onCllick(){
const num1 = document.getElementById("numm1").value;
const numm2 =document.getElementById("num2").value;
const result = document.getElementById("results").value;

let results = "operation";
switch(result) {
   case "add": results = num1 +numm2; break;
   case "subtract": results = num1 - numm2; break;
   case "product": results = num1 * numm2; break;
}

} 


console.log ( 'The sum is: ', Calculator.add());
console.log ( 'The difference is: ', Calculator.subtract());
console.log ( 'The product is: ', Calculator.multiply());
