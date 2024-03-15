/* cursor effect */
const cursor = document.querySelector(".cursor");
var homeAnchor = $(".home > .web-design , .home > .app-design");
var socialBtn = $(".home > .social > a");
var switchBtn = $(".home > .mode  > .mode-switch , .intro > .mode  > .mode-switch ");
var appSmAnchor = $(".web > .app-design");
var topAnchor = $(".web > .click-top , .app > .click-top");
var webSmAnchor = $(".app > .web-design");
var linkBtn = $(".web > a , .app > a");
var returnBtn = $(".intro > .click-back");
var topBtn = $(".top-btn");

function updateCursor(e) {
	let x = e.pageX - 10;
	let y = e.pageY - 5;

	if (x < 50 || x > window.innerWidth - 50) {
		cursor.style.top = y + "px";
	} else {
		cursor.style.top = y + "px";
		cursor.style.left = x + "px";
	}
}

document.addEventListener("mousemove", (e) => {
	requestAnimationFrame(() => {
		updateCursor(e);
	});
});

homeAnchor.on('mouseover', function () {
	cursor.classList.add('is-home-anchor');
});

homeAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-home-anchor');
});

socialBtn.on('mouseover', function () {
	cursor.classList.add('is-social');
});

socialBtn.on('mouseleave', function () {
	cursor.classList.remove('is-social');
});

switchBtn.on('mouseover', function () {
	cursor.classList.add('is-switch');
});

switchBtn.on('mouseleave', function () {
	cursor.classList.remove('is-switch');
});

appSmAnchor.on('mouseover', function () {
	cursor.classList.add('is-app-sm-anchor');
});

appSmAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-app-sm-anchor');
});

topAnchor.on('mouseover', function () {
	cursor.classList.add('is-top-anchor');
});

topAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-top-anchor');
});

webSmAnchor.on('mouseover', function () {
	cursor.classList.add('is-web-sm-anchor');
});

webSmAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-web-sm-anchor');
});

linkBtn.on('mouseover', function () {
	cursor.classList.add('is-link');
});

linkBtn.on('mouseleave', function () {
	cursor.classList.remove('is-link');
});

returnBtn.on('mouseover', function () {
	cursor.classList.add('is-return');
});

returnBtn.on('mouseleave', function () {
	cursor.classList.remove('is-return');
});

topBtn.on('mouseover', function () {
	cursor.classList.add('is-top-btn');
});

topBtn.on('mouseleave', function () {
	cursor.classList.remove('is-top-btn');
});
