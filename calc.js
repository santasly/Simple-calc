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
const numm1 = document.getElementById("numm1").value;
const num2 =document.getElementById("num2").value;
const Results = new Calc( numm1, num2)
} 


console.log ( 'The sum is: ', Calculator.add());
console.log ( 'The difference is: ', Calculator.subtract());
console.log ( 'The product is: ', Calculator.multiply());
