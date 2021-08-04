var acc = document.getElementsByClassName("accordion")[0];
acc.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 1 + "px";
    } 
});
var topBtn = document.getElementById("topBtn");
var scrollHeight = window.innerHeight / 2;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        topBtn.classList.add("showBtn");
    } else {
        if(topBtn.classList.contains("showBtn")){
            topBtn.classList.remove("showBtn");
        }
    }
}