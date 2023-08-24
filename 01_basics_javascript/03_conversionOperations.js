let score = "342111dksfj";

 console.log(typeof(score))
 newScore = Number(score)
 console.log(typeof(newScore))
 console.log(newScore)

 // When we are using  "3242daf" it is actually string but by using Number class it is showing us number
 // similary when we are going to check the value of newScore we get Nan 
 // Nan mean not a number 
 // when we take true we get 1 as a output and 0 for false.

 let value = true;
 console.log(typeof(value))
 newValue = Number(value)
 console.log(newValue)

 // Now lets try to convet values into number
 isLoggedIn = 1
 isName = "Ranjit"
 let booleanString = Boolean(isName) 
 console.log("This is for name "+booleanString)// if there empty string 0 output otherwise 1 output for string
 console.log(typeof(isLoggedIn))
 let booleanLoggedIn = Boolean(isLoggedIn)
 console.log(typeof(booleanLoggedIn))
 console.log("This is for number "+ booleanLoggedIn) // if 1  then true and if 0 then false
 
 // So if we want to convert 1 into boolean value then we have to use the class Boolean 

 /*
 We can convert number into string by using String class as follows
  */

 number = 385;
 let numberString = String(number)
 console.log(typeof(numberString)) // we can see output as string 