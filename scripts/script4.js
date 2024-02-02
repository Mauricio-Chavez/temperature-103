let number = 10;

// while(number <=12){
//     console.log(number);
//     number=number+2;
// }
// number= 0;
console.log("------------------------While loop----------------------");
while(number<=100){
    console.log(number);
    number=number+10;
}
number= 10;
console.log("------------------------Do-while loop----------------------");
do{
    console.log(number);
    number=number+10;
}while(number<=100);

console.log("------------------------For loop----------------------");
for(let i=0;i<=100;i=i+10){
    console.log(i);
}

let myArray = ['George','Andrew','Daniel','Ricardo','james','Fernanda','Rami','Roneisha','Guillermo','Phillip'];


for(let i=0;i<myArray.length;i++){
   
    document.write(`<p>${myArray[i]}</p>`);
}

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//from 1 to 10; the result of multiply by 3


function multiplyByNum(num ,msg) {
    document.write(` ---- ${msg} ${num} ----`)
    for (let i = 1; i <= 10; i++) {
        document.write(`<p>${num} x ${i} = ${num * i}</p>`);
    }
}

multiplyByNum(5,'yeah');