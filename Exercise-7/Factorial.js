console.log("Calculate Factorial");
function Factorial( num)
{
let sum=1;
for (let index = 1; index <=num; index++) {

  sum=sum*index;
    
}
console.log("Factorial value is :-"+sum);
}
console.log(Factorial(6));