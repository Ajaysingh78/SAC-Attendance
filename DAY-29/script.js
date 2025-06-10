let arr=[1,2,3,4,5]
let arr2=[6,7,10,,8,9]
console.log("my array is :"+arr);
console.log("my array  lenagth is :"+arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(typeof arr);
console.log( arr.toString());
console.log( arr.join(" and "));
console.log( arr.pop());
console.log( arr.pop());


arr.push(100);
console.log( arr);
// here we discuss about the push and pop 
// and similer of push and pop operation respectly shift and unshift 
// push are use to push values in last and pop is popout value in last and similer to shift is use to pop value in begning and unshift is push in begning
console.log(arr.concat(arr2));
// arr2.sort(1,4);
// console.log(arr2)
let number=[1,2,3,4,5,6,7,8]
number.slice(1,3)
console.log(number)