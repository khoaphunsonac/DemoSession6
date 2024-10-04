// Xâu chuỗi (String)
let s = `Hello World`;
// console.log(s.length);
// console.log(s[1]);
// console.log("Liệt kê các kí tự trong chuỗi");
// for (let i of s) {
//     console.log(i);
// }

/* BÀI TẬP 
 * 1. Đếm 1 chuỗi có bao nhiêu khoảng trắng
 * 2. Liệt kê và đếm các kí tự nguyên âm trong chuỗi : u e o a i
 */
// Hàm đếm số lượng khoảng trắng trong chuỗi
function Space(Str) {
    let count = 0;
    for (let i of Str) {
        if (i == ' ') count++;
    }
    if (count == 0) {
        console.log("Chuỗi không chứa khoảng trắng!");
        return;
    }
    console.log(`Số lượng khoảng trắng trong chuỗi là: ${count}`);
}

// Hàm kiểm tra ký tự đã xuất hiện trong chuỗi kết quả chưa
function checkCharacterInString(str, char) {
    for (let i of str) {
        if (i == char) return false;
    }
    return true;
}

// Hàm kiểm tra xem ký tự có phải là nguyên âm không
function checkVowel(i) {
    return i == 'u' || i == 'e' || i == 'o' || i == 'a' || i == 'i' || i == 'U' || i == 'E' || i == 'O' || i == 'A' || i == 'I';
}

// Hàm liệt kê và đếm các nguyên âm trong chuỗi
function listVowel(Str) {
    let count = 0;
    let res = '';
    for (let i of Str) {
        if (checkVowel(i)) {
            if (checkCharacterInString(res, i)) res += i + ", ";
            count++;
        }
    }
    console.log(`Các nguyên âm trong chuỗi là: ${res}có tất cả ${count} nguyên âm `);
}
// Main 
let Str = 'KkfIROBPMNyRuDWayfnEGDJGozhq CksVPIuuRyztCHxsTsbHxjwtfdVnuidJTAn ';
Space(Str);
listVowel(Str);
