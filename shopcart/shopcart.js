/*window.onload = function () {
	if(!document.getElementsByClassName){
		document.getElementsByClassName = function (cls) {
			var rec = [];
			var els = document.getElementsByTagName('*');
			for(var i = 0,len = els.length;i<len;i++) {
				if(els[i].className === cls ||
					els[i].className.indexOf(cls + ' ')>=0 ||
					els[i].className.indexOf(' ' + cls + ' ')>=0 ||
					els[i].className.indexOf(' ' + cls)>=0){
					return rec.push(els[i]);
			}
		}
	}
}
			
			var checkall = document.getElementsByClassName('checkall'),
			check = document.getElementsByClassName('i-fram1'),
			tr = document.getElementsByTagName('ul'),
			seletedgoods = document.getElementById('seleted-goods'),
			totalmoney = document.getElementById('total-money'),
			hider = document.getElementById('hider'),
			hide = document.getElementById('hide'),
			hidepic = hide.getElementsByTagName('span'),
			selected = document.getElementsByClassName('hide-p1'),
			// count = document.getElementsByClassName('count'),
			num = true;

	//计算
	function gettotal() {
		var pri = 0,con = 0;
		var htmlstr = '';//建一个空字符串
		for(var i =0,len = tr.length;i<len;i++){
			if(tr[i].getElementsByTagName('input')[0].checked){
				//底部加上图片
				htmlstr += '<div><img src="'+tr[i].
				getElementsByTagName('img')[0].src
				+'"><span class = "del" index = "'+i+'">取消选择</span></div>'
				//src="'++'"这里注意加入字符串时需要印号和加号
				tr[i].style.backgroundColor = "#76a5af";
				pri += parseFloat(tr[i].getElementsByTagName('li')[4].innerHTML);
				con += parseFloat(tr[i].getElementsByTagName('input')[1].value);
				}else{
				tr[i].style.backgroundColor = "#6fa8dc";
			}
		}
		seletedgoods.innerHTML = con;
		totalmoney.innerHTML = pri;
		hide.innerHTML = htmlstr;
	}

	for(var i =0,len = check.length;i<len;i++) {
		check[i].onclick = function () {
			gettotal();
		}
	}

	for(var i = 0,len = checkall.length;i<len;i++) {
		checkall[i].onclick = function () {
			if(this.checked){
				for(var j = 0,len = check.length;j<len;j++){
					check[j].checked = this.checked;
				}
				gettotal();
			}else {
				for(var j = 0,len = check.length;j<len;j++){
					check[j].checked = false;
				}
				gettotal();
			}
		}
	}
	for(var i = 0,len = check.length;i<len;i++) {
		check[i].onclick = function () {
			if(this.checked == false){
				checkall[0].checked = checkall[1].checked = false;
			}else {
				checkall[0].checked = checkall[1].checked = true;
				for(var j = 0,len = check.length;j<len;j++) {
					if(!check[j].checked){
						checkall[0].checked = checkall[1].checked = false;
					}
					gettotal();
				}
			}
			gettotal();
			
		}
	}
	// for(var i = 0,len = hidepic.length;i<len;i++) {
	// 	hidepic[i].onclick = function () {
	// 		alert('1');
	// 	}
	// }

	hider.onclick = function () {
		if(num) {
			hide.style.display = "block";
			num = false;
		}else{
			hide.style.display = "none";
			num = true;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	}

	//事件代理
	hide.onclick = function (e) {
		e = e || window.event;//兼容IE低版本
		var deg = e.srcElement || e.target;//兼容firefox
		if(deg.className == "del"){
			var index = deg.getAttribute('index');
			var input = tr[index].getElementsByTagName('input')[0];
			input.checked = false;

			input.onclick()//调用input.onclick()重新计算；
		}
	}

	//增减删除
	for(var i = 0,len = tr.length;i<len;i++) {
		// tr[i].index = i;
		tr[i].onclick = function (e) {
			e = e || window.event;
			var log = e.srcElement || e.target;
			var cls = log.className;
			var money1 = this.getElementsByTagName('li')[4];
			var addmoney = parseInt(money1.innerHTML);
			var input = this.getElementsByTagName('input')[1];
			var val = parseInt(input.value);
			var reduce = this.getElementsByTagName('span')[1];
			var delete1 = this.getElementsByTagName('li')[4];

			if(cls == "increase same"){//必须两个类名都写
				input.value = val + 1;
				reduce.innerHTML = '-';
				// money1.innerHTML = addmoney+5999;
			}
			if(cls == 'reduce same'){
				if(input.value > 1){
					input.value = val - 1;
					reduce.innerHTML = '';
					// money1.innerHTML = addmoney-5999;
				}

			}
			if(cls == 'delete'){
				this.style.display = "none";
				for(var j = 0,len = checkall.length;j<len;j++){
					checkall[j].checked != check[i].checked;
				}
			}
		} 
	}
}*/
window.onload = function () {
	if(!document.getElementsByClassName){
		var rec = '';
		var strHtml = document.getElementsByTagName('*');
		document.getElementsByClassName = function (cfg) {
			for (var i = 0; i < strHtml.length; i++) {
				if(strHtml[i].className === 'cfg' || 
					strHtml[i].className.indexOf('cfg' + ' ') >= 0 ||
					strHtml[i].className.indexOf(' ' + 'cfg' + ' ') >= 0 ||
					strHtml[i].className.indexOf(' ' + 'cfg') >= 0){
					return rec.push(strHtml[i]);
				}
			}
		}
	}

	var check = document.getElementsByClassName('i-fram1'),
		tr = document.getElementsByTagName('ul'),
		selectgoods = document.getElementById('seleted-goods'),
		allmoney = document.getElementById('total-money'),
		hide = document.getElementById('hide'),
		hider = document.getElementById('hider'),
		alldel = document.getElementById('sum-delete'),
		goods = document.getElementsByClassName('goods')[0],
		checkall = document.getElementsByClassName('checkall');

	var num = false;
	// console.log(increase);
	//累加价格和数量放到下面
	function gettotle() {
		var count =0,price =0;//如果将其放在for循环里面，相当于每次循环给
							//其初始化为0了；所以count的值一直为1；
		var str = "";//创造一个空字符串来存储已选商品
		for (var i = 0,len = tr.length; i < len; i++) {
			if(tr[i].getElementsByTagName('input')[0].checked){
				//将空字符串存储选好的商品
				str += '<div><img src="'+tr[i].
				getElementsByTagName('img')
				[0].src+'"><span class = "cancle" index = '+i+'>取消选择</span></div>'
				//累加价格和数量放到下面
				count += parseInt(tr[i].getElementsByTagName('input')[1].value);
				price += parseInt(tr[i].getElementsByTagName('li')[4].innerHTML);
			}
		}
		selectgoods.innerHTML = count;
		allmoney.innerHTML = price;
		hide.innerHTML = str;//将字符串付给浮层
	}
	
		for (var i = 0,len = check.length; i < len; i++) {
			check[i].onclick = function () {
				gettotle();
			}
		}
	//全选时都选上
	for (var i = 0,len = checkall.length; i < len; i++) {
		checkall[i].onclick = function () {
			for (var j = 0,len = check.length; j < len; j++) {
				if(this.checked){
					check[j].checked = this.checked;
					if(this.checked){
						alldel.onclick = function () {
							goods.remove();
						}//删除所有的
					}
				}else{
					check[i].checked = false;
				}
			}
			gettotle();
		}
	}
	//当有一个没选上时，全选不打勾
	for (var i = 0,len = check.length; i < len; i++) {
		check[i].onclick = function () {
			if(!this.checked){
           		checkall[0].checked = checkall[1].checked = false;
			}else{
				checkall[0].checked = checkall[1].checked = true;

				for (var j = 0,len = check.length; j < len; j++) {
					if(!check[j].checked){
						checkall[0].checked = checkall[1].checked = false;
					}//添加这个循环是阻止当4个没都选上时，全选打勾了
				}
			}
			gettotle();
		}
	}

	//浮层消失和出现
	hider.onclick = function () {
		if(num == 0){
			hide.style.display = "block";
			num = 1;
		}else{
			hide.style.display = "";
			num = 0;
		}
	}

	//事件代理取消选择那块
	hide.onclick = function (e) {
		var e = e || window.event;
		var log = e.target || e.srcElement;

		if(log.className == "cancle") {
			var index = log.getAttribute('index');
			var that = tr[index].getElementsByTagName('input')[0];
			that.checked = false;
			// log.parentNode.remove();
			// log.parentNode.style.display = "none";
			// gettotle();
			that.onclick();//也可以用上面两行代替；
		}
	}
	//增减删除
	for (var i = 0,len = tr.length; i < len; i++) {
		tr[i].onclick = function (e) {
			var e = e || window.event;
			var log = e.target || e.event;
			var cls = log.className;
			var putnum = this.getElementsByTagName('input')[1];
			var price = this.getElementsByTagName('li')[4];
			var oneprice = parseInt(this.getElementsByTagName('li')[2].innerHTML);
			var value = parseInt(putnum.value);
			var reduce = this.getElementsByTagName('span')[1];
			// console.log(dd);
			if(cls == "increase same"){//必须是两个才能出现
				putnum.value = value + 1;
				price.innerHTML = oneprice * parseInt(putnum.value);
				reduce.innerHTML = "-";
			}
			if(cls == "reduce same"){
				if(putnum.value > 1){
					putnum.value = value - 1;
					price.innerHTML = oneprice * parseInt(putnum.value);
				}
				if(putnum.value == 1) {
					reduce.innerHTML = "";
				}
			}
			if(cls == 'delete'){
				// this.style.display = "none";
				console.log(this);
			}
			gettotle();
		}
		tr[i].getElementsByTagName('input')[1].onkeyup = function () {
			var val = parseInt(this.value);
			var price = this.parentNode.parentNode.getElementsByTagName('li')[4].innerHTML;
			var oneprice = parseInt(this.parentNode.parentNode
							.getElementsByTagName('li')[2].innerHTML);

			if(isNaN(val) || val < 1){
				val = 1;
				//让其值不为空
			}//如果是空值或者负值让其等于1
			this.value = val;//如果放在里面可以输入字母，放在外面就不可以了
			this.parentNode.parentNode.getElementsByTagName('li')[4].innerHTML =
			 oneprice * val;

			gettotle();
		}
	}

}

