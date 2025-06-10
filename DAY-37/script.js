let obj={
    name:"AJAY",
    age:19
}
console.log(obj);
let animal={
    eat:true
};
let rabbit={
    run:true
};
console.log(rabbit);
rabbit.__proto__=animal;
class human{
    constructor(name)
    {
        this.name=name;
        console.log("yes we can do it...");
    }
    abc(){
        console.log("i call abc function");

    }
    xyz()
    {
        console.log("i call xyz function");

    }

}
let a=new human("ajay");
console.log(a);