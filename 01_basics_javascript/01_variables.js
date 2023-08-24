// Prefer  not to use Var variable in javascript because of function scope and block scope

const accountId = 4983497;
let email = "mobbin@mobbin.com";
var accountPassword = 23489037;
let accountState ;
// accountId = 342; // we cannot change account id because it is const
email="mobbin@jian.com"
accountPassword = 2398;
console.log(accountId)
console.table([accountId,email,accountPassword,accountState])