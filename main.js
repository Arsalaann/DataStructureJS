//generate Random number then, find max and min
let arr=new Array(10);
for(var i=0;i<10;i++)
    arr[i]=Math.floor((Math.random()*1001)+99);
arr.sort();
console.log(arr[0],arr[1]);
console.log(arr[8],arr[9]);