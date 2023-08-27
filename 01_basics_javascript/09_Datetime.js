// dates 
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //Sun Aug 27 2023 06:18:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Sun Aug 27 2023
console.log(myDate.toISOString()) //2023-08-27T06:18:14.440Z
console.log(myDate.toLocaleDateString()) //8/27/2023
console.log(myDate.toLocaleString()) //8/27/2023, 6:18:14 AM
console.log(myDate.toTimeString()) //06:18:14 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate)

// Now lets create our own date 

let createdDate = new Date(2023, 0, 5)
console.log(createdDate.toDateString())

let anotherDateTime = new Date(2023, 0, 5, 2, 42)
console.log(anotherDateTime.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getHours())
console.log(newDate.getDate())