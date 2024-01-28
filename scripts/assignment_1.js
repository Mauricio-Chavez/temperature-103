console.log('Script.js');


//!Amazon Variables

var name = 'Mauricio Chavez'; 
var email = 'mau_chavez003@hotmail.com'
var password = 'password123';
var phoneNumber = 6658513882;
var country = 'Mexico';
var langauge = 'spanish';
var currency = 'MXN';
var isPrime = true;
var primeExpirationDate = '12/12/2050';
var address = 'Calle San Vicente #115 Fracc. El Refugio';
var balance = 1000;
var nameOnCard = 'Mauricio Chavez';
var cardNumber = 1234567891234567;
var expirationDate = '12/12/2050';
var cvv = 123;
var cardType = 'Visa';
var nameProduct = 'Laptop';
var priceProduct = 1000;
var quantityProduct = 3;
var totalProduct = priceProduct * quantityProduct;
var descriptionProduct = 'Laptop HP 15.6" 8GB RAM 1TB SSD';
var categoryProduct = 'Electronics';
var isAvailable = true;
var sellerName = 'Amazon';
var sellerRating = 4.5;


document.write(

    `
    <h1>Amazon</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    <p>Phone Number: ${phoneNumber}</p>
    <p>Country: ${country}</p>
    <p>Language: ${langauge}</p>
    <p>Currency: ${currency}</p>
    <p>Is Prime: ${isPrime}</p>
    <p>Prime Expiration Date: ${primeExpirationDate}</p>
    <p>Address: ${address}</p>
    <p>Balance: ${balance}</p>
    <p>Name on Card: ${nameOnCard}</p>
    <p>Card Number: ${cardNumber}</p>
    <p>Expiration Date: ${expirationDate}</p>
    <p>CVV: ${cvv}</p>
    <p>Card Type: ${cardType}</p>
    <p>Name Product: ${nameProduct}</p>
    <p>Price Product: ${priceProduct}</p>
    <p>Quantity Product: ${quantityProduct}</p>
    <p>Total Product: ${totalProduct}</p>
    <p>Description Product: ${descriptionProduct}</p>
    <p>Category Product: ${categoryProduct}</p>
    <p>Is Available: ${isAvailable}</p>
    <p>Seller Name: ${sellerName}</p>
    <p>Seller Rating: ${sellerRating}</p>

    `);
