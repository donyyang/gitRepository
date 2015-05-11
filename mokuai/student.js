function add(student) {
	console.log('add students name: ' + student);
}

exports.add = add;//通过exports对象将add这个方法
//暴漏出去。exports可以挂载属性和方法。