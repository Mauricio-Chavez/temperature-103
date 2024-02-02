function convertTemperature() {
    
    const unit = document.getElementById('unitSelect').value;
    const minimumTemperature = parseFloat(document.getElementById('minimum').value);
    const maximumTemperature = parseFloat(document.getElementById('maximum').value);
    let counter = 0;

    let result;
    if (unit === 'celsius') {
        document.getElementById('resultContainer').innerHTML = '';
        counter = 0;
        for(let currentTemperature = minimumTemperature; currentTemperature <= maximumTemperature; currentTemperature++) {
            counter++;
            result = (currentTemperature * 9/5) + 32;
            document.getElementById('resultContainer').innerHTML += `<p> The coversion <span class="highlighting-blue">Number ${counter}</span> of Celsius <span class="highlighting-red">${currentTemperature} C</span> to Fahrenheit <span class="underline highlighting-green">${result} F</span></p>`;
        }
        mercury= (maximumTemperature *435)/100;
        
        if (maximumTemperature <= 20){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: blue;"></div>`
        }else if (maximumTemperature <= 40 && maximumTemperature >= 20){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: lightblue;"></div>`
        }else if (maximumTemperature <= 60 && maximumTemperature >= 40){
        document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: yellow;"></div>`
        }else if (maximumTemperature <= 80 && maximumTemperature >= 60){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: orange;"></div>`
        }else if (maximumTemperature <= 100 && maximumTemperature >= 80){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: red;"></div>`
        }else if (maximumTemperature > 100){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: 435px; background-color: purple;"></div>`
        }
    } else if (unit === 'fahrenheit') {
        document.getElementById('resultContainer').innerHTML = '';
        counter = 0;
        for(let currentTemperature = minimumTemperature; currentTemperature <= maximumTemperature; currentTemperature++) {
            counter++;
            result = (currentTemperature - 32) * 5/9;
            document.getElementById('resultContainer').innerHTML += `<p> The coversion <span class="highlighting-blue">Number ${counter}</span> of Fahrenheit <span class="highlighting-red">${currentTemperature} F</span> to Celsius <span class="underline highlighting-green">${result.toFixed(2)} C</span></p>`;
        }
        mercury= (maximumTemperature *435)/212;
        console.log(mercury);
        if (maximumTemperature <= 43){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: blue;"></div>`
        }else if (maximumTemperature >= 43 && maximumTemperature <= 85){
            console.log('entro2');
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: lightblue;"></div>`
        }else if (maximumTemperature >= 85 && maximumTemperature <= 127){
            console.log('entro3');
        document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: yellow;"></div>`
        }else if (maximumTemperature >= 127 && maximumTemperature <= 169){
            console.log('entro4');
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: orange;"></div>`
        }else if (maximumTemperature >= 169 && maximumTemperature <= 212){
            console.log('entro5');
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: ${mercury}px; background-color: red;"></div>`
        }else if (maximumTemperature > 212){
            document.getElementById('thermometer').innerHTML = `<div class="thermometer-mercury" id="mercury" style="height: 435px; background-color: purple;"></div>`
        }
    }
}


