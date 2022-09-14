//3. Write a JavaScript program to find the sum of the multiples of 3 and 5
//under 1000

function sumOfMultiples(n,d){
	n=parseInt(n/d);
	return (n)*((n+1)*d/2);
}

function sumOfMultiplesOf3And5(num){
	num--; //as we need under 1000(excluding 1000);
	return sumOfMultiples(num,3)+sumOfMultiples(num,5)-sumOfMultiples(num,15);
}

let limit=1000;
const res=sumOfMultiplesOf3And5(limit);
console.log(res);

