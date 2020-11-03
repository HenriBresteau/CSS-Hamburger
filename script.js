let mouseCursor = document.querySelector('.cursor');
console.log(mouseCursor);
window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top =e.pageY +'px';
    mouseCursor.style.left =e.pageX +'px';
}

// CURSOR GROWING
let navLinks = document.querySelectorAll('.nav-links li');
console.log(navLinks);

navLinks.forEach(link => {
    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
})