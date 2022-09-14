//Q1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function checkTypeOfTraingle(angle1,angle2,angle3){
	if((angle1===angle2) && (angle2===angle3)){
		return "equilateral";
	}
	else if((angle1===angle2) || (angle2===angle3) || (angle3===angle1)){
		return "isosceles";
	}else{
		return "scalene";
	}

}

//equilateral traingle check
let result=checkTypeOfTraingle(60,60,60);
console.log(`Given traingle is ${result}`);


//isosceles traingle check
result=checkTypeOfTraingle(50,40,90);
console.log(`Given traingle is ${result}`);

//scalene traingle check
result=checkTypeOfTraingle(60,45,45);
console.log(`Given traingle is ${result}`);







