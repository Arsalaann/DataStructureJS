// //generate Random number then, find max and min
// let arr=new Array(10);
// for(var i=0;i<10;i++)
//     arr[i]=Math.floor(Math.random()*899+100);
// let min=1000,max=99,sec_min=1001,sec_max=98;
// for(var i=0;i<10;i++){
//     if(arr[i]>sec_max){
//         if(arr[i]>max){
//             sec_max=max;
//             max=arr[i];
//         }else
//             sec_max=arr[i];
//     }
//     if(arr[i]<sec_min){
//         if(arr[i]<min){
//             sec_min=min;
//             min=arr[i];
//         }else
//             sec_min=arr[i];
//     }
// }
// console.log(sec_min,sec_max);

// //generate Random number then, find max and min using sort()
// let arr=new Array(10);
// for(var i=0;i<10;i++)
//     arr[i]=Math.floor(Math.random()*899+100);
// arr.sort((a,b)=>{return a-b});
// console.log(arr[1],arr[8]);

//prime factors of n
// let arr=new Array();
// function FindPrimeFactors(n){
//     for(var i=2;i<=n/2;i++){
//         for(var j=2;j<=i/2;j++){
//             if(i%j==0)
//                 break;
//         }
//         if(j>i/2)
//             if(n%i==0){
//                 arr[arr.length-1]=i;
//                 console.log(i);
//             }
//     }
// }
// FindPrimeFactors(15);

//Two length palindrome
// let arr=[];
// for(var i=11;i<99;i+=11)
//     arr[arr.length-1]=arr[i];

let myMap=new Map();
 for(var i=1;i<=6;i++)
     myMap.set(i,0);
while(true){
    let x=Math.floor(Math.random()*6)+1;
    myMap.set(x, (myMap.get(x))+1);
    if(myMap.get(x)>9){
        console.log(x);
        break;
    }
}
let mn=10000;
myMap.forEach((key, val)=>{
    if(val<mn)
        mn=key;
});
console.log(mn);


   


