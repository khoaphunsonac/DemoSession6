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

function listProduct(product) {
    for (let i = 1; i <= product.length; i++) {
        console.log(`Sản phẩm thứ ${i}:`);
        let str = product[i - 1].split(",");
        console.log("\tID: " + str[0]);
        console.log("\tName: " + str[1]);
        console.log("\tPrice: " + str[2]);
        console.log("\tQuantity: " + str[3]);
        console.log("\tTotal: " + (Number(str[2]) * Number(str[3])).toFixed(2));
    }
}

//listProduct(products);
/**
 * 1. Xây dựng hiển thị thông tin của 1 sản phẩm dựa trên chuỗi được cung cấp 
 * 2. Xây dựng hàm liệt kê các sản phẩm có tên chứa 1 từ khóa
 * 3. Kiểm tra 1 mã sản phẩm có tồn tại trong danh sách sản phẩm hay không
 * 4. Liệt kê các sản phẩm có giá nằm trong khoảng từ min đến max
 */

function listInforOfProduct(product) {
    let str = product.split(",");
    console.log("ID: " + str[0]);
    console.log("Name: " + str[1]);
    console.log("Price: " + str[2]);
    console.log("Quantity: " + str[3]);
}

function listProductWithKey(products, key) {
    for (let i = 0; i < products.length; i++) {
        let s = products[i].split(",");
        if (s[1].toLowerCase().includes(key.toLowerCase())) {
            listInforOfProduct(products[i]);
            console.log("-----------------------");
        };
    }
}

function checkProductWithKey(products, key) {
    for (let i = 0; i < products.length; i++) {
        let s = products[i].split(",");
        if (s[1].toLowerCase().includes(key.toLowerCase())) return true;
    }
    return false;
}

function listWithPrice(products, min, max) {
    for (let i = 0; i < products.length; i++) {
        let s = products[i].split(",");
        if (Number(s[3]) >= min && Number(s[3]) <= max) {
            listInforOfProduct(products[i]);
            console.log("-----------------------");
        };
    }
}
// Test
listProductWithKey(products, "tablet");
console.log(checkProductWithKey(products, "laptop"));
listWithPrice(products, 5, 12);