let accounts = [
    'acc1,123,Kevin,1980-10-11,male',
    'acc2,123,Peter,1979-03-08,female',
    'acc3,123,Teo,1980-10-11,male'
];

function login(username, password, accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        if (result[0].trim() == username.trim() && result[1].trim() == password) return true;
    }
    return false;
}
function printInfo(account) {
    let res = account.split(',');
    console.log(`Username: ${res[0]}`);
    console.log(`Password: ${res[1]}`);
    console.log(`Name: ${res[2]}`);
    console.log(`DoB: ${res[3]}`);
    console.log(`Sexual: ${res[4]}`);
    console.log(`-------------------`);
}
//1. Liet ke cac tai khoan co ngay sinh nhat hom nay.
let today = '2024-10-11';
let date = today.split("-");
function findBirthday(accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (bDay[1] == date[1] && bDay[2] == date[2]) printInfo(acc);
    }
}
//findBirthday(accounts);
//2. Liet ke cac tai khoan la nu co ngay sinh la 8 thang 3
function findWomenDay(accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (bDay[1] == '03' && bDay[2] == '08' && result[4] == 'female') printInfo(acc);
    }
}
//findWomenDay(accounts);
//3. Liet ke cac tai khoan co tuoi lon hon 40
function findOver40yrs(accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (Number(date[0]) - Number(bDay[0]) > 40) printInfo(acc);
    }
}
//findOver40yrs(accounts);
//4. Dem co bao nhieu tai khoan duoc sinh trong 1 thang cua 1 nam
let temp = "1980-10";
function findBirthdayInADate(day, accounts) {
    let count = 0;
    let dTemp = day.split("-");
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (bDay[0] == dTemp[0] && bDay[1] == dTemp[1]) count++;
    }
    return count;
}
//console.log(findBirthdayInADate(temp, accounts));
//5. Liet ke cac tai khoan nu co tuoi lon hon 50
function findWomenOver50(accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (Number(date[0]) - Number(bDay[0]) > 50 && result[4] == 'female') printInfo(acc);
    }
}
//findWomenOver50(accounts);
//6. Liet ke cac tai khoan co ten chua 1 tu khoan
temp = "Peter";
function findAccountByName(name, accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        if (result[2].toLowerCase() == name.toLowerCase()) printInfo(acc);
    }
}
//findAccountByName(temp,accounts);
//7. Kiem tra so tai khoan nao la nam co tuoi lon hon 60 hay khong?
function checkAccountOver60(accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        let bDay = result[3].split("-");
        if (Number(date[0]) - Number(bDay[0]) > 60) return true;
    }
    return false;
}
//console.log(checkAccountOver60(accounts));
//8. Kiểm tra 1 username co ton tai trong danh sach hay khong?
temp = "acc1";
function checkAccountByUsername(username, accounts) {
    for (let acc of accounts) {
        let result = acc.split(",");
        if (result[0] == username) return true;
    }
    return false;
}
console.log(checkAccountByUsername(temp,accounts));
//9. Liet ke thong tin 1 tai khoan dua tren username
temp = "acc3";
function printInfoByUsername(username,accounts){
    for (let acc of accounts) {
        let result = acc.split(",");
        if (result[0] == username) printInfo(acc);
    }
}
printInfoByUsername(temp,accounts);