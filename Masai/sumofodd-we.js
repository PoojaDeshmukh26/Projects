let arr = [1, 2, 3, 4];

let sumOfOdd = function (arr) {
    let sum = 0;
    for (let i = 0; i <=arr.length-1; i++) {
        if (i % 2 == 0) {
            sum += arr[i];
        }
    }
    console.log(sum)
}
sumOfOdd(arr);