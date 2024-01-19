class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get getName(){
		return `${this.name}`;
	}
	set setAge(age){
		this.age = age;
	}
	study(){
		return `${this.name} is studying`;
	}
	teach(){
		return `${this.name} is teaching`
	}
	
}

class Student extends Person {
	constructor(stuName,stuAge){
		super(name, age)
		this.name = stuName;
		this.age = stuAge;

	}
	

}

class Teacher extends Person {
	constructor(teaName, teaAge){
		this.teaName = teaName;
		this.teaAge = teaAge;
	}

}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
