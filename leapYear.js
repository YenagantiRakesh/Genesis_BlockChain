//Q1. Write a program to find whether a given year is a leap year or not.



function leapOrNot(year){
	if((year%4===0 && year%100!==0) || (year%400===0)){
		return "Leap Year";
	}
	return "Not a leap year";
}

const input=2016;
const result=leapOrNot(input);

console.log(`Given Year i.e.., ${input} is ${result}`);