/* cursor effect */
const cursor = document.querySelector(".cursor");
var btn = $(".youshii-btn , nav > a , .youshii-mode-switch,.mobile-nav-switch");
var scrollBtn = $(".top-btn,.scroll-bar");
var web = $(".web > article > .item ");
var app = $(".app > article > .item ");

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


btn.on('mouseover', function () {
	cursor.classList.add('is-hover');
});

btn.on('mouseleave', function () {
	cursor.classList.remove('is-hover');
});

scrollBtn.on('mouseover', function () {
	cursor.classList.add('is-topBtn');
});

scrollBtn.on('mouseleave', function () {
	cursor.classList.remove('is-topBtn');
});

web.on('mouseover', function () {
	cursor.classList.add('is-project');
});

web.on('mouseleave', function () {
	cursor.classList.remove('is-project');
});

app.on('mouseover', function () {
	cursor.classList.add('is-app');
});

app.on('mouseleave', function () {
	cursor.classList.remove('is-app');
});
