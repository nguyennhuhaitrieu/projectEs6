class Student {
	constructor(code,name,age) {
		this.code = code;
		this.name=name;
		this.age=age;
	}

	showInfo() {
		return this.code + ' - ' + this.name + ' - ' + this.getAge();
	}

	getAge() {
		let today = new Date();
		console.log(today);
		let year = today.getFullYear();
		console.log(year);
		return year - this.age;
	}

}

let studenObj = new Student("B120800","Nguyen Nhu Hai Trieu","1992");
console.log(studenObj);
console.log(studenObj.showInfo());