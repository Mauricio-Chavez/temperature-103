function convertTemperature() {
    const temperature = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.getElementById('unitSelect').value;

    let result;
    if (unit === 'celsius') {
        result = (temperature * 9/5) + 32;
        document.getElementById('resultContainer').innerHTML = `<span class="underline">${result.toFixed(2)} F</span>`;
    } else if (unit === 'fahrenheit') {
        result = (temperature - 32) * 5/9;
        document.getElementById('resultContainer').innerHTML = `<span class="underline">${result.toFixed(2)} C</span>`;
    }
}

