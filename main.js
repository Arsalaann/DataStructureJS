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

//generate Random number then, find max and min using sort()
let arr=new Array(10);
for(var i=0;i<10;i++)
    arr[i]=Math.floor(Math.random()*899+100);
arr.sort((a,b)=>{return a-b});
console.log(arr[1],arr[8]);