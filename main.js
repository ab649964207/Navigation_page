
//生成html标签，添加属性的函数
function tag(tagName, attributes ) {
	var element = document.createElement(tagName);
	for (var key in attributes) {
		element[key] = attributes[key];
	}
	return element;
}
//初始化数据
var keys = {
	0 : ['q','w','e','r','t','y','u','i','o','p','[',']','\\'],
	1 : ['a','s','d','f','g','h','j','k','l',';','\''],
	2 : ['z','x','c','v','b','n','m',',','.','/'],
	length: 3
}
var hash = {
	q: 'qq.com',
	w: 'weibo.com',
	e: 'ele.me',
	r: 'renren.com',
	t: 'taobao.com',
	y: 'youtube.com',
	u: 'uc.com',
	i: 'iqiyi.com',
	o: 'opera.com',
	h: 'hao123.com',
	s: 'sohu.com',
	g: 'google.com',
	y: 'youku.com',
	z:'zhihu.com',
	b:'baidu.com'

}

//从localStorage获取信息

var hashInLocalStorage;
var hashInLocalStorage = JSON.parse(localStorage.getItem('uuu') || 'null');
if (hashInLocalStorage) {
	hash = hashInLocalStorage;
}
for (let i = 0; i < keys.length; i++) {
	var keyboardrow = tag('div');
	keyboard.appendChild(keyboardrow);
	for (let j = 0; j < keys[i].length; j++) {

		//给button注册属性事件

		var button = tag('button', { id: keys[i][j], textContent: 'E'});
		
		button.onclick = function (event) {
			var button2 = event.target;
			var tempWebsite = prompt('请输入一个网址');
			key = event.target.id;
			hash[key] = tempWebsite;
			button2.nextSibling.src = 'http://www.' + hash[key] + '/favicon.ico';
			localStorage.setItem('uuu', JSON.stringify(hash));
		}
		
		//添加目标网站的icon

		img = tag('img');
		if (hash[keys[i][j]]) {
			img.src = 'http://www.' + hash[keys[i][j]] + '/favicon.ico';
		} else {
			img.src = './image/notfind.png'
		}
		img.onerror = function (event) {
			event.target.src = './image/notfind.png';
		}

		//生成kbd标签

		var kbd = tag('kbd', { className: 'key' });
		var span = tag('span', { className: 'text', textContent: keys[i][j] });
		kbd.onclick = function (event) {
	
			let key = event.path[0].childNodes[0].textContent;
			website = hash[key];
			window.open('http://' + website, '_blank ')
			
		}
		
		keyboardrow.appendChild(kbd);
		kbd.appendChild(span);
		kbd.appendChild(button);
		kbd.appendChild(img);		
	}	
}

//监听键盘事件
var searchMode = false;
document.onkeypress = function (a) {
	
	key = a['key'];
	website = hash[key];
	if (!searchMode) {
		if (website === null || website === undefined) {
			alert('抱歉,该网址似乎是个空地址,编辑一下吧')
			document.getElementById(`${key}`).click()
			
			
		}else{
			window.open('http://' + website, '_blank ')
		}
		
		
	}
	
	
}
document.onclick = function (event) {
	if (event.target === searchInput) {
		searchMode = true;
		
	} else {
		searchMode = false;
	}
	
}



