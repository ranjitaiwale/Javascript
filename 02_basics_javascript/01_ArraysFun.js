const hero = ["Thor","IronMan","SpiderMan"]
const dc = ["Superman","Hanuman","Shaktiman"]

// hero.push(dc) // This is not right way to merge array
newArray = hero.concat(dc)
console.log(newArray)

// there is another way to merge to arrays spread method

const gods = ["Mahadev","Ram","Krishna"]
const Asura = ["Ravana","bakasur","putana"]

const SuraAsura = [...gods,...Asura]
console.log(SuraAsura)

// Another way to merge an array 
const anotherArray = [1,2,3,[23,42,42,[384,5],[32,4,2344,5,234]]]
const solvedArray = anotherArray.flat(Infinity)
console.log(solvedArray)

// Some times we want to convert something into array we can convert anything in array by using Array.from

console.log(Array.from("RanjitAiwale"))
console.log(Array.isArray("Sai")) // this is used to check whether the element is array or not . 


console.log(Array.from({name:"Ranjit"})) // this is exceptional case  // this will print empty array


num1 = 100; 
num2 = 200;
num3 = 300; 
console.log(Array.of(num1,num2,num3)) // this will combine num1,num2,num3 values into the array

