

	//获取样式的函数，当有border或者padding等时，若改变
	//width 或者height时，用offset会出错，将其封装，
	//可参考jsyundong.js
	function getStyle(obj,attr) {
		// 判断是否为IE
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		}else {
			return getComputedStyle(obj,false)[attr];
		}
	}


	//如果要链式运动，给其传一个参数fn,fn是函数，当执行完时，
	//没有马上结束，再执行这个回调函数
	function startMoves(obj,attr,target,fn) {
			//开始运动之前，先清除原有的setInterval();
			clearInterval(obj.timer);
			//给每个i都加上timer;解决了一个小bug
			obj.timer = setInterval(function () {

				//判断是否是透明度，因为透明度是小数，
				//parseInt是取整的，将透明度取成0了。
				var icus = 0;

				if(attr == "opacity") {
					//由于打出来的是有很多小数，所以用Math.round()进行四舍五入
					//取整
					icus = Math.round(parseFloat(getStyle(obj,attr))*100);
				
				}else{
					
					icus = parseInt(getStyle(obj,attr));
				
				}

				//算速度
				var speed = (target - icus)/6;
				speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

				//判断
				if(icus == target){

					clearInterval(obj.timer);

					//判断是否执行回调函数
					if(fn){
						fn();
					}

				}else{
					
					if(attr == "opacity") {

						//注意要把alpha 引到引号里面
						obj.style.filter = "alpha(opacity:'+(icus + speed)+')"
						obj.style.opacity = (icus + speed)/100;
						
					}else{
						//这样写不能将width作为参数穿进去，可以如下
						// obj.style.width = icus + speed + "px";
						//这样写就可以传参了
						// obj.style["width"] = icus + speed + "px";
						obj.style[attr] = icus + speed + "px";
					
					}
				}
				
			},30);
		}
		
