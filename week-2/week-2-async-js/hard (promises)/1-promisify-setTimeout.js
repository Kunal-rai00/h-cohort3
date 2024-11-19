/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve)=>{
        setTimeout(resolve, n)
    })
}

wait(3000)
console.log("my name is kunal")

module.exports = wait;
