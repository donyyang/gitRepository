window.onload = function () {
	var demo = document.getElementById("demo");
	var smallBox = document.getElementById("small-box");
	var bigBox = document.getElementById("big-box");
	var images = bigBox.getElementsByTagName("img")[0];
	var floatBox = document.getElementById("float-box");
	var pp = document.getElementById("pp");
	var mark = document.getElementById("mark");
	//将其换成mark;
	mark.onmouseover = function () {
		pp.innerHTML += "onmosueover";
		floatBox.style.display = "block";
		bigBox.style.display = "block";
	}
	mark.onmouseout = function () {
		pp.innerHTML += "ONMOUSEOUT";
		floatBox.style.display = "none";
		bigBox.style.display = "none";
	}

	mark.onmousemove = function (e) {
		var e = e || window.event;   //捕获事件

		//放大镜的X位移 = 坐标的X - smallBox.offsetLeft- 放大镜宽度的一半  ；
		var left = e.clientX - demo.offsetLeft - smallBox.offsetLeft - floatBox.offsetWidth/2;
		var top = e.clientY - demo.offsetTop - smallBox.offsetTop - floatBox.offsetHeight/2;

		var boxW = smallBox.offsetWidth - floatBox.offsetWidth;
		var boxH = smallBox.offsetHeight - floatBox.offsetHeight;
		//判断left和top的值是否超过smallBox的范围/必须写在
		//赋给放大镜的上面才有效
		// if(left < 0) {
		// 	left = 0;
		// }else if(left > (boxW)){
		// 	left = (boxW)
		// }
		left = Math.min(boxW,Math.max(0,left));

		// if(top < 0) {
		// 	top = 0;
		// }else if(top > (boxH)){
		// 	top = (boxH)
		// }
		top = Math.min(boxH,Math.max(0,top));
	
		//将值赋给放大镜的坐标
		floatBox.style.left = left + "px";
		floatBox.style.top = top + "px";
		


		var parentX = left/(smallBox.offsetWidth - floatBox.offsetWidth);
		var parentY = top/(smallBox.offsetHeight - floatBox.offsetHeight);


	//因为是相反的，记得parentX/Y前面加负号
		images.style.left = -parentX * (images.offsetWidth - bigBox.offsetWidth) + "px";
		images.style.top = -parentY * (images.offsetHeight - bigBox.offsetHeight) + "px";
	

	}
	//重点：小图片与大图片的比 = 放大镜与可看见大图片的的那个长方形
}
