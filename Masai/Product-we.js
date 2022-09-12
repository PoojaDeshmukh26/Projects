let arr = [2, 3, 4];

let productOfNum = function (arr) {
    let product = 1;
    for (let i = 0; i <=arr.length-1; i++) {
        product *= arr[i];
    }
    console.log(product)
}


productOfNum(arr);