// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr3
// where r is the radius
// 3) Cone- Volume= πr2h/3

// where r is the radius and h is the height of the cone.


class Cylinder{
	constructor(radius,height){
		this.height=height;
		this.radius=radius;
	};

	getVolume(){
		return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
	}
}

class Sphere{
	constructor(radius,height){
		this.height=height;
		this.radius=radius;
	};

	getVolume(){
		return ((4/3)*Math.PI*this.radius*this.radius*this.height).toFixed(4);
	}
}

class Cone{
	constructor(radius,height){
		this.height=height;
		this.radius=radius;
	};

	getVolume(){
		return ((Math.PI*this.radius*this.radius*this.height)/3).toFixed(4);
	}
}

const radius=3;
const height=6;

//cylinder
let obj1= new Cylinder(radius,height);
const res1=obj1.getVolume();
console.log(`Volume of cylinder is ${res1}`);

//sphere
let obj2= new Sphere(radius,height);
const res2=obj2.getVolume();
console.log(`Volume of Sphere is ${res2}`);

//Cone
let obj3= new Cone(radius,height);
const res3=obj3.getVolume();
console.log(`Volume of Cone is ${res3}`);

