function inner(e){
	if (e.keyCode == 13) {
		var textval = document.getElementById('to-input').value = document.getElementById('to-input').value.trim();
		if (textval == '') {
			alert('不能为空!');
			return;
		}
		innerhtml();
		tocheck.style.display = 'block';
	}
}



/****添加内容*****/
function innerhtml(){
		var toinputText = document.getElementById('to-input').value;
		var tolist = document.getElementById('tolist');
		tolist.innerHTML = tolist.innerHTML + '<div class="clone-copy">'
						 + '<input type="checkbox" class="too-check" />'
						 + '<p class="clone">'+toinputText+'</p>'
						 + '<input type="image" src="img/close.png" class="close" style="display: none;"/>'
						 + '</div>';

		document.getElementById('to-input').value = '';
	forcheck();
	All();//统计
	toggle();//显示和隐藏
//	clicktext();
}

/**全选、反选***/
var tocheck = document.getElementById('to-check');
var toocheck = document.getElementsByClassName('too-check');
var num =0; //累计子复选框有多少选中
tocheck.onclick = function(){
	for (var i=0;i<toocheck.length;i++) {
		if (tocheck.checked == true) {
			toocheck[i].checked = true;
			num=toocheck.length;
		}else{
			toocheck[i].checked = false;
			num=0;
		}
	}
}

/***少选****/
function forcheck(){
	for (var i=0;i<toocheck.length;i++) {
		toocheck[i].onclick = function(){
			if (this.checked == true) {
				num++;
			}else{
				num--;
			}

			if (num == toocheck.length) {
				tocheck.checked = true;
			}else{
				tocheck.checked = false;
			}
		}
	}
}


function All(){
	var all = document.getElementsByClassName('clone-copy');
	var sumatch = document.getElementById('sumatch');
	var alltext = 0;
	for(var i=0;i<all.length;i++){
		alltext++;
	}
	sumatch.innerHTML=alltext;
}


function toggle(){
	var close = document.getElementsByClassName('close'); //删除图标
	var clonecopy = document.getElementsByClassName('clone-copy');
	for (var i=0;i<clonecopy.length;i++) {
		(function(i){

			clonecopy[i].onmouseover=function(){
				console.log(i);
				close[i].style.display='block';
				toggle();
			}
			clonecopy[i].onmouseout=function(){
					close[i].style.display='none'
				toggle();
			}
			close[i].onclick=function(){
				clonecopy[i].remove();
				toggle();
				All();
			}
		})(i);
	}
}

function check_true(){
	for (var i=0;i<toocheck.length;i++) {
		if (toocheck.checked==false) {

		}
	}
}




//双击改变为可编辑文本
//function clicktext(){
//	var clone = document.getElementsByClassName('clone');
//
//	for(var i=0;i<clone.length;i++){
//		clone[i].ondblclick = function(){
//			var oldhtml = this.innerHTML; //获取双击的文本内容
//			var newinput = document.createElement('input'); //创建一个新的input标签
//			newinput.type = 'text'; //为input框添加类型
//			newinput.value = this.innerHTML;
//			console.log(oldhtml)
//			this.innerHTML = ''; //设置元素内容为空
//			this.appendChild(newinput); //添加子元素
//			this.focus();
//			newinput.onblur = function(){
//
//			}
//		}
//	}
//}
