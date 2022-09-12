let arr=[1,2,3];

let ExtractOdd=function(arr){
  let bag="";
for(let i=0;i<arr.length;i++){
    if(i%2==0){
      bag+=(arr[i])+" ";
    }
}
console.log(bag);
}
ExtractOdd(arr);