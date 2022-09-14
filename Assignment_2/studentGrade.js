/*2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”. */

function studentGrade(marks){
	switch(true){
		case(marks>=90 && marks<=100):
			return 'S Grade';
			break;
		case(marks>=80 && marks<90):
			return 'A Grade';
			break;
				
		case(marks>=70 && marks<80):
			return 'B Grade';
			break;
		case(marks>=60 && marks<70):
			return 'C Grade';
			break;
		case(marks>=50 && marks<60):
			return 'D Grade';
			break;
		case(marks>=40 && marks<50):
			return 'E Grade';
			break;
		case(marks<40):
			return 'Failed';
			break;
		default:
			return 'Invalid marks';
			break;
					
	}
}

//checking for student who is pass and got some grade
const input1=80;
const result1=studentGrade(input1);
console.log(result1);

//checking for student who is Failed
const input2=30;
const result2=studentGrade(input2);
console.log(result2);

//checking for student whose input is invalid
const input3='my Marks';
const result3=studentGrade(input3);
console.log(result3);

