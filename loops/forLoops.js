/* loops
-offer us a quick and easy way to do something repeatedly, or loop over something
-a loop has 3 parts
    -Initial expression
    -condition
    -increment expression
*/

//set i to 0
//while i is less than 10
// i++ (add 1)

// for(let i=0; i < 10; i++){
//     console.log(i);
// }

// for(let i =0; i <= 20; i +=2){
//     console.log(i);
// }

// for(let i=10; i>=0; i-=1){
//     console.log(i);
// }

// //go through a name and display each letter individually
// let myName = "Chase"

// for(let i=0; i< myName.length; i++){
//     console.log(myName[i]);
// }

let sum = 0

for(let i=0; i<=50; i++){
    sum += i;
    console.log(sum);
}