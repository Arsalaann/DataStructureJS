//generate Random number then, find max and min
let arr=new Array(10);
let min=1000,max=99;
for(var i=0;i<10;i++){
    arr[i]=Math.floor((Math.random()*1000)+99);
    min=Math.min(min,arr[i]);
    max=Math.max(max,arr[i]);
}
console.log(min,max);
