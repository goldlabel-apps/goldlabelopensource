---
category: "tricks-of-the-trade"
slug: "/blog/javascript/es6-classes"
title: "ES6 Classes"
description: "ES6 supports proper OOP classes"
keywords: "tricks, javascript, promises, oop, classes"
icon: "javascript"
image: "/png/javascript.png"
order: 40
---
ES6 supports Classes in a similar way to normal OOP languages. It's very important to understand that ES6 classes are simply syntactic sugar to normal javascript class objects using `new` keyword with constructor function.

```javascript
//Class Person
class Person {
	//define static utility function that just say hi
	static sayHi(firstName , lastName){
		console.log("Hi " + firstName + " " + lastName);
	}

	//constructor function
	constructor(firstName , lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	//class method -> note that this method is a prototype method not instance method
	printName(){
		console.log(this.firstName + " " + this.lastName);
	}
}

//Class Engineer inherit from Person
class Engineer extends Person{
	constructor(firstName , lastName , job) {
		//Call base class constructor
		super(firstName , lastName);

		//add subclass job property
		this.job = job;
	}

	//class method -> note that this method is a prototype method not instance method
	printNameWithJob(){
		console.log(this.firstName + " " + this.lastName + ", " + this.job)
	}
}

var person1 = new Person("Amr" , "Labib");
var engineer = new Engineer("Amr" , "Labib" , "Software Engineer");


person1.printName(); //Amr Labib
engineer.printName();//Amr Labib  ---> this method is inherited from base class Person
engineer.printNameWithJob();//Amr Labib, Software Engineer  ---> this method is defined in Engineer class
Person.sayHi("Amr" , "Labib")// Hi Amr Labib ----> this is a static utility function defined in Person class
Engineer.sayHi("Amr 2" , "Labib")//Hi Amr 2 Labib ---> this is a static utility function defined in Person class and inherited in Engineer class

person1.sayHi()// Uncaught TypeError: person1.sayHi is not a function ----> because sayHi is a static function and can't be called by a class instance instead it needs to be called on Class directly.
person1.printNameWithJob(); //Uncaught TypeError: person1.printNameWithJob is not a function --> because printNameWithJob is defined in subclass only
```
