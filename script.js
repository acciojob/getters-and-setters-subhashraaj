class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get getName(){
		return this.name;
	}
	set setAge(age){
		return this.age;
	}
	
}

class Student extends Person {
	constructor(stuName,stuAge){
		super(stuName,stuAge);
		this.stuName = stuName;
		this.stuAge = stuAge;

	}
	
	study(){
		return `${this.stuName} is studying`;
	}
}

class Teacher extends Person {
	constructor(teaName, teaAge){
		super(teaName, teaAge);
		this.teaName = teaName;
		this.teaAge = teaAge;
	}
	teach(){
		return `${this.teaName} is teaching`
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
