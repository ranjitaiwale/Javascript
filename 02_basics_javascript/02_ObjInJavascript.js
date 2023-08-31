// singelton 

// .....   Object literals  .....

const jsUser = {
    name : "Ranjit aiwale",
    age : 18,
    email : "ranjitaiwale@gmail.com",
    isLoggeIN : false,
    lastLoginDay : ["monday","tuesday","Thursday"]
}

console.log(jsUser.name)
console.log(jsUser["name","email","age","isLoggIN","lastLoginDay"])

// to override the values following syntax is used 

jsUser.name = "Asif Tamboli"
console.log(jsUser["name"])

// To avoid this overriding you can use freeze the object
// Object.freeze(jsUser)
jsUser.name = "Ankit kamble"
console.log(jsUser)

// here we changed the name to "Ankit kmable" but not overrided the function 


// lets make one function and use it in the object

jsUser.greeting = function(){
    console.log("hello user I am your function")
}
console.log(jsUser.greeting())

// first we get the error because we freezed the  object but after remove of freeze

jsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(jsUser.greetingTwo());