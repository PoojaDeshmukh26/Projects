let arr = [1, 2];
let Doubling = function (arr) {
    let bag="";
    for (let i = 0; i <=arr.length-1; i++) {
        bag+=(arr[i] * 2)+" ";
    }
    console.log(bag);
}
Doubling(arr);