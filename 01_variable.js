const accountId = 173837;
let accountEmail = "chethan@getSelection.com";
var accountPassword = '12323123'
accountCity = "Bangalore";
let accountState;

// accountId = 2; //reassign to const variable is not allowed
accountEmail = "hc@hc.com";
accountPassword = "21221"
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/