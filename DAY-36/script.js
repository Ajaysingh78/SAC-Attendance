 async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)

        }, 3500);
    })
}
console.log("this are good or")
console.log("this are good or2")
console.log("this are good or3")
let data = await getdata()
data.then((v) => {
    console.log("this are good or3")
    console.log("this are good or3")
    console.log("this are good or3")

})

