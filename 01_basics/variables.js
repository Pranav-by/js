const accountId = 144453
let accountEmail = "pranav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountID = 2 can't change
accountEmail = "pra123@gmail.com"
accountPassword = "12345566"
accountCity = "Hyd"

console.table([accountId ,accountEmail ,accountPassword, accountCity,accountState])
/*
Prefer not to use of var because of issue of scope and functional scope
*/