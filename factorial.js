//Q: Write a program to find the factorial of a number.

function factorial(num){
	if(num===0 || num===1){
		return 1;
	}
	return num*factorial(num-1);
}

const input=5;
const result=factorial(input);
console.log(`factorial of ${input} is: ${result}`);