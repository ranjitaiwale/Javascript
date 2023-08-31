const fbUser = new Object() // this is singlton object
const fbUser2 = {} // this is non singlton object 
console.log(fbUser);
fbUser2.name = "Ranjit Aiwale"
fbUser2.mail = "ranjitawiale.gmail.com"
console.log(fbUser2);

// lets learn some new things about the nesting object

const regularUser = {
    userName :"RAnjit aiwale",
     userFullName :{
        name:"Ranjit",
        lastName:"Aiwale",
        userAddress : {
            native : "At post mahim tal sangola",
            permanent : "At post mahim tal sangola"
        }

     }
    }
console.log(regularUser.userFullName.userAddress);


// let us try to learn the combining of the elements of the ojects 

const obj1 = {a:"1", b:"2", c:"3"}
const obj2 = {d:"5", e : "4" , f:"9"}

// here we have to make another value to assign the object in it
const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3)

// also we can use the spread method to combining the objects

const objSpread = {...obj1, ...obj2}
console.log("combination through spread",objSpread);

// when we receieve objects from database it is in the array so lets see some about it

const user = [
    {
        id : 1,
        mailId : "ranjitaiwale343@mobbin.com",
        userName : "Ranjit Aiwale"

    },

    {
        id : 1,
        mailId : "ranjitaiwale343@mobbin.com",
        userName : "Ranjit Aiwale"

    },

    {
        id : 1,
        mailId : "ranjitaiwale343@mobbin.com",
        userName : "Ranjit Aiwale"

    },

    {
        id : 1,
        mailId : "ranjitaiwale343@mobbin.com",
        userName : "Ranjit Aiwale"

    },

    {
        id : 1,
        mailId : "ranjitaiwale343@mobbin.com",
        userName : "Ranjit Aiwale"

    }
]
console.log(user[1].mailId); // in this way you can access elements from objects in array when they comes from database

console.log(Object.keys(regularUser)) // this will converts objects into arrays
console.log(Object.entries(regularUser)) // this will converst objects into arrays and arrays  