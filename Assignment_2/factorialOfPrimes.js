// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function isPrime(num){
	if(num<1){
		return false;
	}
	if(num<=3){
		return true;
	}
	if(num%2===0 || num%3===0){
		return false;
	}

	for(let i=5;i*i<=num;i=i+6){
		if(num%i===0 || num%(i+2)===0){
			return false;
		}
	}
	return true;
}

function isFactorialPrime(n)
{
    if (!isPrime(n))
        return false;
 
    let fact = 1;
    let i = 1;
    while (fact <= n + 1)
    {
        fact = fact * i;
        if (n + 1 == fact || n - 1 == fact)
            return true;
        i++;
    }
    return false;
}

const lowerLimit=1;
const higherLimit=1000;
let finalResult=[]

for(let i=lowerLimit;i<higherLimit;i++){
	let res=isFactorialPrime(i);
	if(res===true){
		finalResult.push(i);
	}
}

console.log(finalResult)