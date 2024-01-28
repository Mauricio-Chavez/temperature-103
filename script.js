function celTofar(){
    let cel = prompt("Enter the temperature in Celsius degrees: ");
    let far = (cel * 9/5) + 32;
    document.getElementById("resultCTF").innerHTML = far +" F";
}

function farTocel(){
    let far = prompt("Enter the temperature in Fahrenheit degrees: ");
    let cel = (far - 32) * 5/9;
    document.getElementById("resultFTC").innerHTML = cel +" C";
}