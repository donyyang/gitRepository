

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


	//在这里，attr和target是一对键值对，可以用json的写法
	// startMoves(obj,{attr1 : target1, attr2 : target2})
	function startMoves(obj,json,fn) {
			//开始运动之前，先清除原有的setInterval();
			clearInterval(obj.timer);
			//定义一个标杆
			var flag = true;

			//给每个i都加上timer;解决了一个小bug
			obj.timer = setInterval(function () {

				//在json中，用for in循环将Json中的键值对、
				//取出来，用attr后这样就不用改if(attr == )
				//里面的attr了；
				
				for (var attr in json) {

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
				var speed = (json[attr] - icus)/6;
				speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

				/*这样写是当一个键值对完成时清除setInterval
				由于有多个键值对，所以不能这样写，加上一个
				flag = true;
				if(icus == json[attr]){

				clearInterval(obj.timer);*/

				//如果没有完成，令flag为假
				if(icus != json[attr]) {

					flag = false;		

				}
					
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

				// 如果都执行完了，才清除setInterval
				if(flag) {
					clearInterval(obj.timer);

					//判断是否执行回调函数
					if(fn) {
						fn();
					}
				}
			},30);
		}
		
