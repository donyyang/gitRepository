function g(id) {
	return typeof id === "string" ? document.getElementById(id) : id;
}
window.onload = function () {

	var conts = g("cont"),
		contsDivs = conts.getElementsByTagName("div"),
		navs = g("nav"),
		navsLis = navs.getElementsByTagName("a"),
		len = navsLis.length;
	// 自己能理解的方式
	window.onscroll = function () {
		var currentId = "";
		var pos = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
		//获取当前ID的值
		for (var i = 0; i < len; i++) {
			var contsTop = contsDivs[i].offsetTop;
			if(pos > contsTop - 200) {
				currentId = contsDivs[i].getAttribute("id");
				currentId = contsDivs[i].id;
				console.log(currentId);
			}else {
				break; //for循环用break退出；
			}
		}
		//yi每个a的href判断是否和当前的Id相等，不相等的话去掉
		if(currentId) {
			for (var j = 0; j < len; j++) {

				var _href = navsLis[j].getAttribute("href");
				// console.log(_href);
				if(_href != "#" + currentId) {
					navsLis[j].className = "";
				}else {
					navsLis[j].className  = "addShow";
				}
			}
		}
	}

	//慕课上的
	// window.onscroll = function () {
	// 	var pos = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	// 	var currentId = "";

	// 	for (var i = 0; i < len; i++) {
	// 		var contsTop = contsDivs[i].offsetTop;
			
	// 		if(pos > contsTop) {
	// 			currentId = contsDivs[i].id;
	// 			console.log(currentId);
	// 		}else {
	// 			break;
	// 		}
	// 	}

	// 	function hasClass(obj,cls) {
	// 		//判断className里面是否包含cls的值
	// 		return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
	// 	}

	// 	function removeClass(obj,cls) {
	// 		if(hasClass(obj,cls)) {
	// 			var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
	// 			obj.className = obj.className.replace(reg,"");
	// 		}
	// 	}

	// 	function addClass(obj,cls) {
	// 		if(!hasClass(obj,cls)) {
	// 			obj.className = " " + cls;
	// 		}
	// 	}

	// 	if(currentId) {
	// 		for (var j = 0; j < len; j++) {
	// 			//这样获取到的是file:///G:/gitRepository/gitRepository/wangyedingwei/dingwei.html#five
	// 			var _href = navsLis[j].href;
	// 			//将其分割得到最后的first
	// 			var _hrefId = _href.split("#");

	// 			if(_hrefId[_hrefId.length - 1] != currentId) {
	// 				removeClass(navsLis,"addShow");
	// 			}else {
	// 				addClass(navsLis,"addShow");
	// 			}
	// 		}
	// 	}
	// }
}