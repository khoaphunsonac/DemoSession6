let fileName = "abc.doc.txt.gif.jpg";
// Tìm vị trí của kí tự trong chuỗi
let lastIndex = fileName.lastIndexOf('.');
console.log(lastIndex);
//Chèn thêm chuỗi con vào sau chuỗi
let temp = fileName.concat("abc");
console.log(temp);
//Trả về chuỗi con từ kí thứ thứ i về sau 
let temp1 = fileName.substring(4);
console.log(temp1);
//Trả về chuỗi con từ kí tự thứ i đến vị trí nhỏ hơn j 
let temp2 = fileName.substring(4, 7);
console.log(temp2);

let temp3 = fileName.substring(lastIndex, lastIndex + 4);
console.log(temp3);
