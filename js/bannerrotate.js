/*
	JavaScript to load random banners. Banner paths in /style/generic.css
*/
var banner = [ 'banner1', 'banner2', 'banner3', 'banner4' ];
var banner = banner[Math.floor(Math.random() * banner.length)];
document.querySelector('#banner').classList.add(banner);
