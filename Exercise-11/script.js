console.log("Hii...")

function Fact(number) {
    let sum = 1;
    for (let index = 1; index <=number; index++) {
        sum = sum * index;

    }
    return sum;

}
let number = 5;
console.log("FActorial is: "+Fact(number));