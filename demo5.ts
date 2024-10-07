let s = 'st01,Name 1,7.8';
let result = s.split(',');
console.log(result);

let dtb = Number(result[2]);
console.log(dtb);

if (dtb >= 8) console.log("Loại A");
else if (dtb >= 7) console.log("Loại B");
else if (dtb >= 6) console.log("Loại C");
else if (dtb >= 5) console.log("Loại D");
else console.log("Học lại !");


