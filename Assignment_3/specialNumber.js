// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

function factorial(n){
	if(n===0 || n===1){
		return 1;
	}
	return n*factorial(n-1);
}

function isSpecialNumber(num){
	let temp=num;
	let factRes=0;
	while(temp>0){
		let rem=temp%10;
		factRes+=factorial(rem);
		temp=parseInt(temp/10);
	}
	if(num===factRes){
		return "SpecialNumber";
	}
	return "Not a SpecialNumber";

}

const input=145;
const res=isSpecialNumber(input);
console.log(`${input} is ${res}`);