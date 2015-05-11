//使用require函数来加载模块,返回模块exports对象
var student = require('./student')//导入学生这个js脚本模块。
var teacher = require('./teacher')

// teacher.add('scott');

function add(teacherName,students) {
	teacher.add(teacherName);

	students.forEach(function(item) {
		student.add(item);
	})//forEach是遍历students。
}

exports.add = add;//将class这个js模块暴露出去

//module.exports = add;//和exports调用的方式是一样的，
//exports是module.exports的辅助方法。exports挂在属性
//和方法，然后在赋给module.exports
