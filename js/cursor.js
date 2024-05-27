/* cursor effect */
const cursor = document.querySelector(".cursor");
var navAnchor = $(".navigation > .item");
var visualAnchor = $(".visual-link");
var linkAnchor = $(".web-link, .app-link, .web > .list > .item , .app > .list > .item");

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

navAnchor.on('mouseover', function () {
	cursor.classList.add('is-nav-anchor');
});

navAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-nav-anchor');
});

linkAnchor.on('mouseover', function () {
	cursor.classList.add('is-link-anchor');
});

linkAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-link-anchor');
});

visualAnchor.on('mouseover', function () {
	cursor.classList.add('is-visual-anchor');
});

visualAnchor.on('mouseleave', function () {
	cursor.classList.remove('is-visual-anchor');
});
