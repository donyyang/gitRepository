
function g(id) {
		return typeof id === "string" ? document.getElementById(id) : id;
}

window.onload = function () {

	//实现自动居中 (el = element)
	function middle( el ) {
		//获取body的宽度和高度
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;

		var elW = el.clientWidth;
		var elH = el.clientHeight;

		el.style.left = (bodyW - elW)/2 + "px";
		el.style.top = (bodyH - elH)/2 + "px";
	}

	
	var mouseX = 0;
	var mouseY = 0;

	var isDraging = false;  //鼠标是否可拖拽

	//鼠标按下的事件
	g("input-title").addEventListener("mousedown",function (e) {
		var e = e || window.event;

		mouseX = e.clientX - g("ui-input").offsetLeft;
		mouseY = e.clientY - g("ui-input").offsetTop;
		
		isDraging = true;
	})

	//鼠标拖动的事件
	document.onmousemove = function (e) {
		var e = e || window.event;

		var moveX = 0;
		var moveY = 0;

		if(isDraging === true) {
			moveX = e.clientX - mouseX;
			moveY = e.clientY - mouseY;

			//让其不脱离可视区
			var bodyL = document.documentElement.clientWidth - g("ui-input").offsetWidth;
			var bodyT = document.documentElement.clientHeight- g("ui-input").offsetHeight;
			// if(moveX < 0) {
			// 	moveX = 0;
			// }else if(moveX > bodyL) {
			// 	moveX = bodyL;
			// }

			// if(moveY < 0) {
			// 	moveY = 0;
			// }else if(moveY > bodyT) {
			// 	moveY = bodyT;
			// }

			//Math.max(0,moveX),返回最大的那个值，保证其永远大于0
			//Math.min(bodyL,Math.max(0,moveX)),返回最小的那个值，保证其永远小于bodyL;
			moveX = Math.min(bodyL,Math.max(0,moveX));
			moveY = Math.min(bodyT,Math.max(0,moveY));



			g("ui-input").style.left = moveX + "px";
			g("ui-input").style.top = moveY + "px";
		}
	}

	//鼠标松开的事件(给input-title添加的话，当鼠标移动过快离开标题头就没有事件了)
	document.onmouseup = function () {
		isDraging = false;
	}

	g("logon").addEventListener("click",function () {
		g("ui-input").style.display = "block";
		g("marsk").style.display = "block";
		middle(g("ui-input"));
	})

	g("cancel").addEventListener("click",function () {
		g("ui-input").style.display = "none";
		g("marsk").style.display = "none";
	})
}