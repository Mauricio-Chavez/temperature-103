// functions

let counter = 0;

// 1)creating the function
function increase() {
    counter++;
    if(counter == 5){
        console.log('yeahhhhh')
    }
    console.log(counter);

    
}
function decrease() {
    counter--;
    console.log(counter);
    // alert('Hi');
    // document.write('Hi');
}

function sayHi(){
    let userName = prompt('Enter Your Name:');
    console.log(`Welcome ${userName}`);
}

function multiByThree(){
    let number = prompt('Enter a number:');
    let result = number * 3;
    console.log(result);
}
function addTwoNumbers(){
    let number1 = Number(prompt('Enter a number:'));
    let number2 = Number(prompt('Enter another number:'));
    let result = number1 + number2;
    document.getElementById('result').innerHTML = result;
}
//1) call/run/execute thje function
