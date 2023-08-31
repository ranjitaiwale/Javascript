function sayMyName(){
    console.log("Ranjit Aiwale")
}

sayMyName()
// sayMyName --> is just a reference of function  --> means just giving the information where is the function is 
// sayMyName() --> is a execution of function

// let us one function to perfom the sum operation
function addTwoNumber(num1, num2){ // here num1 and num2 are parameter when we are creating def of function then there are parameter

    console.log(num1+num2)
} 
addTwoNumber(5,2) // while we call the function and passing the values these values are called as arguments
// This will return sum of 5 and 2, 5 and 2 are arguments of functions 

function mulTwoNumber(num1,num2){
    return num1*num2
}

result = mulTwoNumber(5,7)
console.log(result)
// when we make function as i made by using return then we can store function in some value other wise not

function loginMsg(username){
    if (!username) {
        console.log("Please enter username !");
        return 
    }
    return `${username} just logged in `
}
console.log(loginMsg(""))

// in this case when user did not entered any value in username then it will print undefined to avoid that let us make one condition

