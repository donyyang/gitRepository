/*function learn(something) {
	console.log(something);
}//回掉函数

function we(callback,something) {
	something += 'is coll';

	callback(something);//将修改后的someting
	//传递给回调函数
}

we(learn,'nodejs');

we(function (something) {
	console.log(something);
},'jade');//匿名函数*/

//回调函数
/*var c = 0;
function printIt() {
	console.log(c);
}

function plus(callback) {
	setTimeout(function () {
		c += 1;
		callback();//加入了一个回调函数
		//使其异步加载
	},1000);
	
}

plus(printIt);
// printIt();*/

/*var pet = {
	words: '...',
	spead: function () {
		console.log(this.words);
	}
}
pet.spead();*/

// function Pet(words) {
// 	this.words = words;
// 	this.speak = function () {
// 		console.log(this.words);
// 		console.log(this);
// 	}
// }
// var cat =new Pet('miao');
// cat.speak();

function Pet(words) {
	this.words = words;
	this.speak = function () {
		console.log(this.words);
	}
}

function Dog(words) {
	Pet.call(this,words);
	//Pet.apply(this,agruments)//这两种方法
	//改变了this的指针对象，本来this 指向Pet,
	//而现在指向了Dog;
}
var dog = new Dog('wang');

dog.speak();
