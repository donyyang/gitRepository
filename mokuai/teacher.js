function add(teacher) {
	console.log('add teachers name: ' + teacher);
}

exports.add = add;//通过exports对象将add这个方法暴漏出去。