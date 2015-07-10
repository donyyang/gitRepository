// function $(id) {
// 	return typeof id === 'string' ? document.getElementById(id)
//  : id; }

 window.onload = function () {
 	var nav = document.getElementById('nav').getElementsByTagName('li'),
 	 cont = document.getElementById("cl-middle").getElementsByTagName("div"),
 	 len = nav.length;

 for(var i = 0; i < len; i++){

 	nav[i].id = i;

 	nav[i].onclick = function () {
 		for(var j = 0; j < len;j++){
 			nav[j].className = "";
 			cont[j].style.display = "none";
 		}

 		this.className = "show";
 		cont[this.id].style.display = "block";
 	}
 }
 }

