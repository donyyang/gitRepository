// (function (window,undefined) {
	window.onload = function () {
	if(!document.getElementByClassName) {
		document.getElementByClassName = function (cfg) {
			var rec = [];
			var ele = document.getElementsByTagName('*');
			for(var i = 0,len = ele.length;i<len;i++) {
				if(ele[i].className === cfg || 
					ele[i].className.indexOf(cfg + ' ')>=0 || 
					ele[i].className.indexOf(' ' + cfg + ' ')>=0 || 
					ele[i].className.indexOf(' ' + cfg)>=0){
				return rec.push(ele[i]);
				}
			}
		}
	}

	var mkinds = document.getElementById('money-kinds').
				 getElementsByTagName('span'),
		show = document.getElementById('show').
				 getElementsByTagName('span'),
		backmoney = document.getElementById('back-money'),
		price = document.getElementsByClassName('price'),
		buyarea = document.getElementById('buy-area').
		getElementsByTagName('a'),
		getaera = document.getElementById('get-aera'),
		buybtn = document.getElementsByClassName('buy'),
		back = document.getElementById('coin');
	//累加显示在显示屏上的money
	function showmonye() {
		for(var i = 0,len = mkinds.length;i<len;i++) {
			mkinds[i].onclick = function () {
				var val = parseFloat(this.innerHTML);

				show[0].innerHTML = parseFloat(show[0].innerHTML)+val;
				
				backmoney.innerHTML = 0;//点击的时候，返回的钱变为0；
				getaera.innerHTML = '';//点击的时候，收货区清空
				show[1].innerHTML = 30;//点击的时候，秒数重新设为30；

				showbar();//调用点亮时购买的函数，令当
							//钱大于可购买的单价是，点亮
			} 
		}
	}
	showmonye();//因为封装起来了，所以的调用
	//点亮能购买的
	function showbar() {
		for(var j = 0,len = buybtn.length;j<len;j++){
			 	// buybtn[j].index = j;
			 	if(parseInt(show[0].innerHTML) >=
			 		 parseInt(price[j].innerHTML)){
			 		buybtn[j].style.backgroundColor = 'blue';
				 	// buybtn[j].onclick = function () {
						// show[0].innerHTML = parseInt(show[0].innerHTML)-
						// parseInt(price[this.index].innerHTML);
					 // }将这些代码写在这上面不行，显示不出来，
			 	}
			 }//因为是点击出发的事件。必须写到showmonye()里面是，
			 //得再重新算一遍.想了好久！将其添加到for里面
			
	}
	//用了事件代理，因为背景颜色是在js中添加上去的，所以找不到！
	//点击购买时，随着屏幕上数字的变化，小于商品价格的蓝背景变为
	//白色，不加的话，第一次投入多少，当屏幕减少是，蓝色的还
	//是那么多。。令出货仓出现购买的商品
	for(var i = 0,len = buyarea.length;i<len;i++) {
		buyarea[i].index = i;

		buyarea[i].onclick = function (e) {
			e = e || window.event;
			var bog = e.srcElement || e.target;
			var str = '';//将一个空字符用于存放购买的商品
			var pic = bog.parentNode.getElementsByTagName('img')[0];
			//获得img元素
			if(bog.style.background == "blue") {
				show[1].innerHTML = 30;//将秒数设为20；
				str = '<img src="'+pic.src+'">';//向空字符中添加
				//外面必须是单引号。
				show[0].innerHTML = parseInt(show[0].innerHTML)-
						parseInt(price[this.index].innerHTML);
				for(var j = 0,len = buybtn.length;j<len;j++) {
					if(parseInt(show[0].innerHTML) <
			 		 parseInt(price[j].innerHTML)){
			 		buybtn[j].style.backgroundColor = '';}
				}//将此处的思维换一下，前面是大于等于是亮起来，
				//这里让他小于时不亮！
			}
			getaera.innerHTML += str;

		}
	}
	//因为多次用到退币中的函数，所以将其封装
	function reset() {
		backmoney.innerHTML = show[0].innerHTML;
		show[0].innerHTML = 0;
		show[1].innerHTML = 0;
		getaera.innerHTML = '';
		for(var i = 0,len = buybtn.length;i<len;i++) {
			if(buybtn[i].style.backgroundColor == 'blue'){
				buybtn[i].style.backgroundColor = '';
			}
		}
	}


	//退币
	back.onclick = function () {
		/*backmoney.innerHTML = show[0].innerHTML;
		show[0].innerHTML = 0;
		getaera.innerHTML = '';
		for(var i = 0,len = buybtn.length;i<len;i++) {
			if(buybtn[i].style.backgroundColor == 'blue'){
				buybtn[i].style.backgroundColor = '';
			}
		}*/
		reset();
		// show[1].innnerHTML = 3;
	}
	//让秒数自动减，当期减到0时，初始设置
	function auto() {
		// var second = parseInt(show[1].innerHTML);
		setInterval(function () {
			if(parseInt(show[1].innerHTML) > 0){
				show[1].innerHTML--;
				if(parseInt(show[1].innerHTML) == 0){
					/*backmoney.innerHTML = show[0].innerHTML;
					show[0].innerHTML = 0;
					getaera.innerHTML = '';
					for(var i = 0,len = buybtn.length;i<len;i++) {
						if(buybtn[i].style.backgroundColor == 'blue'){
							buybtn[i].style.backgroundColor = '';
						}
					}*/
					reset();
				}
			}
		},1000);
	}
	auto();
}
// })(window)