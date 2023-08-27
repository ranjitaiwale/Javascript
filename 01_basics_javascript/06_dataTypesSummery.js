// Primitive datatypes & no primitive datatyeps

/*

primitive datatypes (7) : String, boolean , number , null , undefined , Symbol , bigInt

Non primitive datatypes () : Array, objects, Functions 
 */

const customerId = Symbol("123")
const anotherId = Symbol("123")
console.log(customerId==anotherId)
console.log(customerId)

let gods = ["Ram","Vishnu","Mahadev"]

const myFunction = function(){
    console.log("Hello function...")
}

let sampleObject = {
    name : "Ranjit",
    age : 21,
    city : "Pune"

}
console.log(typeof(sampleObject))
console.log(sampleObject)