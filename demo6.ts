let products = [
    'p01,laptop,4.5,20',
    'p02,laptop,11.2,3',
    'p03,tivi,7.8,4',
    'p04,smartphone,6.5,15',
    'p05,tablet,3.2,10',
    'p06,monitor,5.5,8',
    'p07,keyboard,2.0,50',
    'p08,mouse,1.5,30',
    'p09,printer,9.0,2',
    'p10,speaker,8.3,12'
];

Number
function listObject(obj) {
    let str = obj.split(",");
    console.log("\tID: " + str[0]);
    console.log("\tName: " + str[1]);
    console.log("\tPrice: " + str[2]);
    console.log("\tQuantity: " + str[3]);
    console.log("\tTotal: " + (Number(str[2]) * Number(str[3])).toFixed(2));
}

function listProduct(product) {
    for (let i = 1; i <= product.length; i++) {
        console.log(`Sản phẩm thứ ${i}:`);
        listObject(product[i-1]);
    }
}

listProduct(products);