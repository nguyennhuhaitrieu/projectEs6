/*
Funtion Error 
let student = {
	name:"Peter",
	courses:["Android","PHP","Java"],
	showInfo: function() {
		this.courses.forEach(function(course){
			console.log(`${this.name} ${course}`);
		});
	}
}
*/

/*
let student = {
	name:"Peter",
	courses:["Android","PHP","Java"],
	showInfo: function() {
		var _this = this;
		this.courses.forEach(function(course){
			console.log(`${_this.name} ${course}`);
		});
	}
}
*/
// bind this

/*let student = {
	name:"Peter",
	courses:["Android","PHP","Java"],
	showInfo: function() {
		this.courses.forEach(function(course){
			console.log(`${this.name} ${course}`);
		}.bind(this));
	}
}
*/

let student = {
	name:"Framgia",
	courses:["Android","PHP","Java"],
	showInfo: function() {
		this.courses.forEach(course => {
			console.log(`${this.name} ${course}`);
		});
	}
}

student.showInfo();