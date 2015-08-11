//返回顶部的代码
	window.onload = function () {
		var btop = document.getElementById('backtop');	
		var timer = null;
		var isTop = true;
		//获取页面可视区的高度
		//不能用document.body.clientHeight;
		var client = document.documentElement.clientHeight;
		
		window.onscroll = function () {
				var pos1 = document.body.scrollTop || document.documentElement.scrollTop;
			var pos1 = document.body.scrollTop;
			
			//中间终止时用得到
			if(!isTop) {
				clearInterval(timer);
			}
			isTop = false;

			if(pos1 > client){
				btop.style.display = "block";
			}else{
				btop.style.display = "none";
			}
		}

		btop.onclick = function () {
			timer = setInterval(function () {

				//获取滚动条距离顶部的位置
				//ie浏览器用document.documentElment.scroll
				var pos1 = document.body.scrollTop || document.documentElement.scrollTop;
				
				//加上Math.floor是让其向下取整，使其变为最小的整数，
				//又因为变成最小的整数后，不能达到0 ，所以取负，下面—dis变为+dis
				var dis = Math.floor(-pos1/6);

				isTop = true;
				if(pos1 == 0){
					clearInterval(timer);
				}
				document.body.scrollTop = pos1 + dis;
			},30);
		}
	}