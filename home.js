/*Image slider Logic*/
let imager = document.getElementById("image-contain");

function slidetheimage(amount) {
    imager.style.transform += `translateX(${amount}px)`;
    var style = window.getComputedStyle(imager);
    var matrix = new WebKitCSSMatrix(style.transform);
    console.log(matrix.m41);

    if (matrix.m41 <= -500) {
        imager.style.transform = `translateX(0px)`;
    } else if (matrix.m41 >= 800) {
        imager.style.transform = `translateX(0px)`;
    }
}
/* navbar appear on scroll logic*/
let elem = document.getElementById("forscroll");

window.onscroll = function() {
    showNavigationOnScrol();
};

function showNavigationOnScrol() {
    if (
        document.body.scrollTop > elem.offsetTop ||
        document.documentElement.scrollTop > elem.offsetTop
    ) {
        document.getElementById("scrollmenu").style.top = "0";
    } else {
        document.getElementById("scrollmenu").style.top = "-150px";
    }
}