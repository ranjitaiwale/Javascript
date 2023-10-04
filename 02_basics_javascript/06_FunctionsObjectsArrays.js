function calculateKartPrice(num1){
return num1

}

console.log(calculateKartPrice(5,10,15))

// in this function only first value is printed in the output to print all values we have to use another method by using rest opeartor
function calculateKartPrice1(...num1){ // ... these three dots are called as rest operator
    return num1
}
console.log(calculateKartPrice1(2,4,5,6,7,))


// lets make function using the objects 
const user = {
    userName : "Ranjit",
    price : 990
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)

// this is ok but if price in user object changed to prices then there will be problem so cheklcking the objects is most important part it is done in typscript


// now lets pass array in function so this topic can be wrapped up 

const myNewArray = [100, 200, 300, 400, 500, 600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray))