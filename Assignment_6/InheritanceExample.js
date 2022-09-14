// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.


//Rectangle:
class Rectangle{
	constructor(length,breadth){
		this.length=length;
		this.breadth=breadth;
	}
	area(){
		return this.length*this.breadth;
	}
}

//square:
class Square extends Rectangle{
	constructor(side){
		super(side,side)
	}
}


const len=10;
const breadth=20;

let obj1=new Rectangle(len,breadth);
console.log(`Area of Rectangle ${obj1.area()}`);

let obj2=new Square(len);
console.log(`Area of Square ${obj2.area()}`)