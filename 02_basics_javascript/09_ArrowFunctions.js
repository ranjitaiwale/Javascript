const user = {
    username :"Ranjit ",
    price :4098,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

    }
}

user.welcomeMessage()
user.username = "Rahul"
user.welcomeMessage()  


// Arrow function 

// () => {} syntax of arrow function

const addTwo = (num1, num2)=>{
    return num1 + num2 
}

console.log(addTwo(3,5))


// implicit return arrow function

const addNumbers = (num1, num2) => num1 + num2