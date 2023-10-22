const accountId = 144553 // use to create a const type memory

let accountEmail = "vishwas@google.com" // let is use to create a variable type memory

var accountPassword = "12345" //prefer not to use bcz of issue in block scope

accountCity = "Jaipur" //  not the prefered way to use this 

let accountState; // create a undefined memory

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // use to show output

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // use to show output in the tabular form
