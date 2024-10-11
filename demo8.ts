let accounts = [
    'acc1,123,Kevin,1980-10-20,male',
    'acc2,123,Peter,1979-03-03,female',
    'acc3,123,Teo,1984-11-11,male'
];

function login(username, password, accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        if (result[0].trim() == username.trim() && result[1].trim() == password) return true;
    }
    return false;
}

console.log(login('acc3','456',accounts));