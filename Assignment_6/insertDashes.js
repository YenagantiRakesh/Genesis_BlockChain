// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

function insertDashes(num){
	let temp=num.toString();
	let res=[temp[0]]
	for(let i=1;i<temp.length;i++){
		if(temp[i-1]%2===0 && temp[i]%2===0){
			res.push('-',temp[i]);
		}else{
			res.push(temp[i]);
		}
	}
	let finalResult=res.join('');
	return finalResult;
}


const input='025468';
const res=insertDashes(input);
console.log(res);
