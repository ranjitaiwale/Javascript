function calculateKartPrice(num1){
return num1

}

console.log(calculateKartPrice(5,10,15))

// in this function only first value is printed in the output to print all values we have to use another method by using rest opeartor
function calculateKartPrice1(...num1){ // ... these three dots are called as rest operator
    return num1
}
console.log(calculateKartPrice1(2,4,5,6,7,))

