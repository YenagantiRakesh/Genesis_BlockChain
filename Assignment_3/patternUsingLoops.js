// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printNumbers(num){
	let pat="";
	let count=1;
	for(let i=1;i<=num;i++){
		for(let j=0;j<i;j++){
			pat+=count;
			pat+=' ';
			count++;
		}
		pat+='\n';
	}
	return pat;
}

const input=4;
const res=printNumbers(input);
console.log(res);