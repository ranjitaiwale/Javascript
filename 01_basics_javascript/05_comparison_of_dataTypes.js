console.log("2">1); // true
// As there is one string and one number it give response as we think .....
 
console.log(null>0) // false
console.log(null>=0) // true
console.log(null<=0) // true
console.log(null==0) // false
// we avoid this type of conversions....

console.log(undefined==0)
console.log(undefined>0)

// Strict chec (===)
// in strict check datatypes are not changes automatically as previous one
 
console.log("1"===1); // false
