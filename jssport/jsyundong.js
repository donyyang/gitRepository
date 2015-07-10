window.onload = function () {

	//用js实现移入移出动画
	/*var hide = document.getElementById("hide");
	var share = document.getElementById("share");
	var timer = null;

	hide.onmouseover = function () {
		startMove(0);
	}

	hide.onmouseout = function () {
		startMove(-100);
	}

	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function () {
			var speed = 0;
			if(hide.offsetLeft > target){
				speed = -10;
			}else{
				speed = 10;
			}
			if(hide.offsetLeft == target){
				clearInterval(timer);
			}else{
				hide.style.left = hide.offsetLeft + speed + "px";
				console.log(hide.offsetLeft/5);
			}
		},30);
	}*/
		//用js实现移入缓动移出动画
	/*var hide = document.getElementById("hide");
	var share = document.getElementById("share");
	var timer = null;

	hide.onmouseover = function () {
		startMove(0);
	}

	hide.onmouseout = function () {
		startMove(-100);
	}
		alert(Math.floor(3.4))   //输出3，向上取整
		alert(Math.ceil(3.4))    //输出4，向下取整
	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function () {
			//用目标值（一个固定的值）减去
			//一个变化的值除以一个整数////使速度变化
			//一定要做判断，否则会出错
			var speed = (target - hide.offsetLeft)/10;
			speed = speed < 0 ? Math.floor(speed)
			 : Math.ceil(speed);
			// if(hide.offsetLeft > target){
			// 	speed = -10;
			// }else{
			// 	speed = 10;
			// }
			if(hide.offsetLeft == target){
				clearInterval(timer);
			}else{
				hide.style.left = hide.offsetLeft + speed + "px";
				console.log(hide.offsetLeft/5);
			}
		},30);
	}*/

	//用Js实现opacity动画
	/*var opas = document.getElementById("opas");
	var timer = null;

	opas.onmouseover = function () {
		startMove(0);
	}

	opas.onmouseout = function () {
		startMove(100);
	}

	var alpha = 100;//必须将其放在最外面
	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function () {
			var speed = 0;
			if(alpha > target){
				speed = -10;
			}else{
				speed = 10;
			}

			if(alpha == target){
				clearInterval(timer);
			}else{
				alpha += speed;
				opas.style.opacity = alpha/100; 
				console.log(opas.style.opacity);
			}
		},30);
	}*/

	// 多物体运动前提是不加边框和padding的值,加边框会出现错误
	/*var thr = document.getElementById("three"
		).getElementsByTagName("li");

	var timer = null;

	for (var i = 0,len = thr.length; i < len; i++) {
		thr[i].timer = null;   //给每个i都设置tmier.这样他们就不会
		//相互争取timer了。解决了一个bug;
		opas = 100;
		thr[i].onmouseover = function() {

			startMoves(this,400);

		}

		thr[i].onmouseout = function() {

			startMoves(this,200);

		}

		function startMoves(obj,target) {

			clearInterval(obj.timer);
			//给每个i都加上timer;
			obj.timer = setInterval(function () {

				var widths = obj.offsetWidth;
				var speed = (target - widths)/6;
				speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

				if(widths == target){
					clearInterval(obj.timer);
				}else{
					obj.style.width = widths + speed + "px";
					console.log(obj.style.width);
				}
				
			},30);
		}


	}*/

	//多物体运动前提是不加边框和padding的值，如果有边框
	var thr = document.getElementById("addBorder"
		).getElementsByTagName("li");

	var timer = null;

	for (var i = 0,len = thr.length; i < len; i++) {
		thr[i].timer = null;   //给每个i都设置tmier.这样他们就不会
		//相互争取timer了。解决了一个bug;
		opas = 100;
		thr[i].onmouseover = function() {

			startMoves(this,"opacity",0);

		}

		thr[i].onmouseout = function() {

			startMoves(this,"opacity",100);

		}

		function startMoves(obj,attr,target) {

			clearInterval(obj.timer);
			//给每个i都加上timer;
			obj.timer = setInterval(function () {

				//判断是否是透明度，因为透明度是小数，
				//parseInt是取整的，将透明度取成0了。
				
				if(attr == "opacity") {
					//由于打出来的是有很多小数，所以用Math.round()进行四舍五入
					//取整
					var widths = Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					var widths = parseInt(getStyle(obj,attr));
				}

				//算速度
				var speed = (target - widths)/6;
				speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

				//判断
				if(widths == target){
					clearInterval(obj.timer);
				}else{
					//这样写不能将width作为参数穿进去，可以如下
					// obj.style.width = widths + speed + "px";
					//这样写就可以传参了
					// obj.style["width"] = widths + speed + "px";
					if(attr == "opacity") {

						//注意要把alpha 引到引号里面
						obj.style.filter = "alpha(opacity:'+(widths + speed)+')"
						obj.style.opacity = (widths + speed)/100;
						
						console.log(widths+speed);

					}else{

						obj.style[attr] = widths + speed + "px";
					
					}
				}
				
			},30);
		}


	}

	function getStyle(obj,attr) {
		// 判断是否为IE
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		}else {
			return getComputedStyle(obj,false)[attr];
		}
	}

}



