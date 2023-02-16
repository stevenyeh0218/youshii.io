/* cursor effect */
const cursor = document.querySelector(".cursor");
var btn = $(".menu_item , .mode-select , .sns > a , .colophon_inner_top_right_contact_item > a, #topbtn");
var app = $(".appProjectItem , .project_link , .design_item");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX - 10;
    let y = e.pageY - 5;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

btn.on('mouseover', function () {
    cursor.classList.add('is-hover');
});

btn.on('mouseleave', function () {
    cursor.classList.remove('is-hover');
});

app.on('mouseover', function () {
    cursor.classList.add('is-project');
});

app.on('mouseleave', function () {
    cursor.classList.remove('is-project');
});