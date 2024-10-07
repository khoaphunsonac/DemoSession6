let s = 'Hello World';

// Kiểm tra chuỗi bắt đầu với kí tự 
let kw1 = 'Hel';
if (s.toLowerCase().startsWith(kw1.toLowerCase())) console.log('Đúm');
else console.log('Xai');

// Kiểm tra chuỗi kết thúc với kí tự 
let kw2 = 'rld';
if (s.toLowerCase().endsWith(kw2.toLowerCase())) console.log('Đúm');
else console.log('Xai');

// Kiểm tra chuỗi có chứa kí tự không 
let kw3 = 'llo Wo';
if (s.toLowerCase().includes(kw3.toLowerCase())) console.log('Đúm');
else console.log('Xai');

//Ứng dụng tìm các file có cùng phần mở rộng 
let fileNames = ["computer1.cpp", "computer2.py", "TV1.gif", "TV2.png", "laptop.gif"];
function listFileName(fileNames, extension) {
    for (let fname of fileNames) {
        if (fname.toLowerCase().endsWith(extension.toLowerCase())) console.log(fname);
    }
}

//listFileName(fileNames,"gif");
//Xây dựng các hàm thực hiện các yêu cầu sau 
// 1. Đếm có bao nhiêu tên file bắt đầu bằng chữ "com"
// 2. Kiểm tra có file nào có chứa chữ số V1 hay không 
// 2. Kiểm tra có file nào có chứa khoảng trắng hay không 


function F1(fileNames, extension) {
    let count = 0;
    for (let fname of fileNames) {
        if (fname.toLowerCase().startsWith(extension.toLowerCase())) count++;
    }
    return count
}

function F2(fileNames, extension) {
    for (let fname of fileNames) {
        if (fname.toLowerCase().includes(extension.toLowerCase())) {
            return true;
        };
    }
    return false;
}
let exten0 = "com";
console.log("Số lượng file bắt đầu từ chữ " + exten0 + " là: " + F1(fileNames, exten0));
let exten1 = 'v1';
if (F2(fileNames, exten1)) console.log("Trong mảng có chứa chữ " + exten1);
else console.log("Trong mảng không có chứa chữ " + exten1);

let exten2 = ' ';
if (F2(fileNames, exten2)) console.log("Trong mảng có chứa chữ khoảng trắng");
else console.log("Trong mảng không chứa chữ khoảng trắng");


