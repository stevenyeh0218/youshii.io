/* cursor effect */
const cursor = document.querySelector(".cursor");
var btn = $(".menu_item , .appProjectItem , .project_link , .design_item , .mode-select , a , #topbtn");

document.addEventListener("mousemove",(e) => {
    let x = e.pageX - 10;
    let y = e.pageY - 5;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

btn.on('mouseover',function(){
    cursor.classList.add('is-hover');
});

btn.on('mouseleave',function(){
    cursor.classList.remove('is-hover');
});