let s1 = 'aBc DeF gH';
s1 = s1.toLowerCase();
//console.log(s1);

let s2 = 'aBc DeF gH';
s2 = s2.toUpperCase();
//console.log(s2);

let username = 'Acc1'; 
function exict(username){
    if(username.toLowerCase == 'acc1'.toLowerCase){
        console.log('Username đã tồn tại!');
    }
    else{
        console.log('Username hợp lệ!');
    }
}

exict(username);