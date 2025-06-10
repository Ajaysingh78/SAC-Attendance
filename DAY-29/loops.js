let array=[1,4,6,8,4,7]
for (let index = 1; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])
    
}
// array.forEach((value ,index,arr)=>{
//     console.log(value,index,arr)
// })
let object={
    a:1,
    b:2,
    c:3,
    d:4
}
// for (const key of object) {
//     if(object.hasOwnProperty.call(object,key))
//     {
//         const element=object[key];
//         console.log( key,element);
//     }
    
// }
for(const iterator of array)
{
    console.log(iterator);
}