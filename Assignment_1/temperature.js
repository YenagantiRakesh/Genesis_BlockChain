//Q2. Write a JavaScript program to convert temperatures to and from Celsius,
//Fahrenheit.

function celsiusToFahrenheit(celsiusTemp){
	return ((9*celsiusTemp)/5)+32;
}

function fahrenheitToCelsius(fahrenheitTemp){
	return ((fahrenheitTemp-32)/9)*5;
}

const input1=60;
const resultOfCelsiusToFahrenheit=celsiusToFahrenheit(input1);
console.log(`${input1}°C = ${resultOfCelsiusToFahrenheit}°F`);

const input2=45;
const resultOfFahrenheitToCelsius=fahrenheitToCelsius(input2);
console.log(`${input2}°F = ${resultOfFahrenheitToCelsius}°C` );

