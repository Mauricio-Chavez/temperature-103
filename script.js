let currentPage = 0;
let itemsPerPage = 4; 
let results = [];
document.getElementById('previousPageButton').addEventListener('click', previousPage);
document.getElementById('nextPageButton').addEventListener('click', nextPage);

function showPage(page) {
    let start = page * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = results.slice(start, end);

    let resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; 

    for(let item of paginatedItems) {
        resultContainer.appendChild(item);
    }
    document.getElementById('currentPage').textContent = 'Page: ' + (page + 1);
}


function nextPage() {
    currentPage++;
    showPage(currentPage);
}


function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}


function convertTemperature() {
    const unit = document.getElementById('unitSelect').value;
    const minimumTemperature = parseFloat(document.getElementById('minimum').value);
    const maximumTemperature = parseFloat(document.getElementById('maximum').value);
    let counter = 0;

    let resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; 
    let result;
    results = [];

    if (unit === 'celsius') {
        counter = 0;
        for(let currentTemperature = minimumTemperature; currentTemperature <= maximumTemperature; currentTemperature++) {
            counter++;
            result = (currentTemperature * 9/5) + 32;
            let newElement = document.createElement('p');
            newElement.innerHTML = `The conversion <span class="highlighting-blue">Number ${counter}</span> of Celsius <span class="highlighting-red">${currentTemperature} C</span> to Fahrenheit <span class="underline highlighting-green">${result} F</span>`;
            resultContainer.appendChild(newElement);
            results.push(newElement);
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
        counter = 0;
        for(let currentTemperature = minimumTemperature; currentTemperature <= maximumTemperature; currentTemperature++) {
            counter++;
            result = (currentTemperature - 32) * 5/9;
            let newElement = document.createElement('p');
            newElement.innerHTML = `The conversion <span class="highlighting-blue">Number ${counter}</span> of Fahrenheit <span class="highlighting-red">${currentTemperature} F</span> to Celsius <span class="underline highlighting-green">${result.toFixed(2)} C</span>`;
            resultContainer.appendChild(newElement);
            results.push(newElement);
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
    showPage(0);
}


