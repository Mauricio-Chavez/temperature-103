
var userName = 'Mauricio';

userName = 'Yosef';
userName = 'Abel';
userName = 'Sens';

console.log(userName);  

var employeeName = 'Mauricio';
var employeeAge = 20;
var employeeCountry = 'Mexico';
var employeePhone = 6658513882;
var employeeSalaryMonthly = 50000;
var employeeSalaryYearly = employeeSalaryMonthly * 12;

document.write(
    `
    <h1>Employee Info</h1>
    <p>Name: ${employeeName}</p>
    <p>Age: ${employeeAge}</p>
    <p>Country: ${employeeCountry}</p>
    <p>Phone: ${employeePhone}</p>
    <p>Salary Monthly: ${employeeSalaryMonthly}</p>
    <p>Salary Yearly: ${employeeSalaryYearly}</p>
    `
);