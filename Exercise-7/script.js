console.log("calcultor");


function sum(a,b) {
    return a+b;
    
}
function min(a,b) {
    return a-b;
    
}
function exponestion(a,b) {
    return a**b;
    
}
function Divide(a,b) {
    return a/b;
    
}

let a=10;
let b=2;
let varr={
    "1":"Addition",
    "2":"Subtraction",
    "3":"multiple",
    "4":"Division",
  
}
let random=Math.random()
let first=prompt("Enter the first number:-")
let Second=prompt("Enter the first number:-")
let operation=prompt("Enter the operation:-")
varr=1;
console.log(varr);
if (varr==1) {
    let ans=min(a,b);
    console.log("your Subtraction is :"+ans);
    
}
else if(varr==2) {
    let ans=Divide(a,b);
    console.log("your Division is :"+ans);
    


    
} 
else if (varr==3)
{ let ans=sum(a,b);
    console.log("your addition is :"+ans);
    
    
}
else{
    let ans=exponestion(a,b);
    console.log("your exponsion is :"+ans);
    
}
