/* cursor effect */
const cursor = document.querySelector(".cursor");
var btn = $(".youshii-btn , nav > a , .youshii-mode-switch,.mobile-nav-switch");
var scrollBtn = $(".top-btn,.scroll-bar");
var project = $(".web > article > .item");

document.addEventListener("mousemove", (e) => {
	let x = e.pageX - 10;
	let y = e.pageY - 5;

	// 檢查游標是否接近視窗邊緣
	if (x < 50 || x > window.innerWidth - 50) {
		cursor.style.top = y + "px";
	} else {
		cursor.style.top = y + "px";
		cursor.style.left = x + "px";
	}
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

project.on('mouseover', function () {
	cursor.classList.add('is-project');
});

project.on('mouseleave', function () {
	cursor.classList.remove('is-project');
});
