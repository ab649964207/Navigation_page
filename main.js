var keys = {
	0 : ['q','w','e','r','t','y','u','i','o','p'],
	1 : ['a','s','d','f','g','h','j','k','l'],
	2 : ['z','x','c','v','b','n','m'],
	length: 3
}
var hash = {
	q: 'qq.com',
	w: 'weibo.com',
	e: 'ele.me',
	r: 'renren.com',
	t: 'tianya.com',
	y: 'youtube.com',
	u: 'uc.com',
	i: 'iqiyi.com',
	o: 'opera.com',
	p: undefined,

}
var hashInLocalStorage;
var hashInLocalStorage = JSON.parse(localStorage.getItem('uuu') || 'null');
if (hashInLocalStorage) {
	hash = hashInLocalStorage;
}


for (let i = 0; i < keys.length; i++) {
	keyboardrow = document.createElement('div');
	keyboard.appendChild(keyboardrow);
	for (let j = 0; j < keys[i].length; j++) {
		kbd = document.createElement('kbd');
		kbd.textContent = keys[i][j];
		keyboardrow.appendChild(kbd);	
		button = document.createElement('button');
		button.textContent = 'Edit';
		button.id = keys[i][j];
		kbd.appendChild(button);

		button.onclick = function (a) {
			console.log(a.target.id);
			tempWebsite = prompt('请输入一个网址');
			key = a.target.id;
			hash[key] = tempWebsite;
			localStorage.setItem('uuu', JSON.stringify(hash));
			console.log(hash);
			
		}
		
		
	}	
}
document.onkeypress = function (a) {
	key = a['key'];
	website = hash[key];
	// location.href = 'http://' + website;
	window.open('http://' + website, '_blank ')
}
