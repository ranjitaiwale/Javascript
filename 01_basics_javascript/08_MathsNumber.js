const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
// now we can check the length
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //this give .00 after any number

console.log(Math.abs(-5)) // this will print 5 only 

console.log(Math.round(345897.45))
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))


console.log(Math.random())
console.log((Math.random()*100)+1)
console.log(Math.floor(Math.random()*10)+1) // to get single digit number

// if we want random numbers in some range then we can do as follows

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)+min)) // this will gives values between 10 to 20
    