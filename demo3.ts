let s = 'Hello World';

let kw1 = 'Hel';
if (s.toLowerCase().startsWith(kw1.toLowerCase())) console.log('Đúm');
else console.log('Xai');

let kw2 = 'rld';
if (s.toLowerCase().endsWith(kw2.toLowerCase())) console.log('Đúm');
else console.log('Xai');

let kw3 = 'llo Wo';
if (s.toLowerCase().includes(kw3.toLowerCase())) console.log('Đúm');
else console.log('Xai');

