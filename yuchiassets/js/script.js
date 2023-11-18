// const backbtn = document.getElementById('scrollButton');

// window.addEventListener('scroll', () => {
//     const scPosi = window.scrollY || document.documentElement.scrollTop;
//     const whanum = 300;
//     if (scPosi > whanum) {
//         backbtn.style.display = 'block'; 
//     } else {
//         backbtn.style.display = 'none'; 
//     }
// });


// backbtn.addEventListener('click', () => {
// window.scrollTo({
//     top: 0,
//     behavior: 'smooth' });
// });
const scrollButton = document.getElementById('scrollButton');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
const currentScroll = window.scrollY || document.documentElement.scrollTop;

if (currentScroll > lastScrollTop) {
    
    scrollButton.style.display = 'block';
} else {

    scrollButton.style.display = 'none';
}

lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

scrollButton.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
// kokokara tab

const ButtonH = document.getElementById('buttoHobby');
const ElementH = document.querySelector('.hobby');
const ButtonF = document.getElementById('buttoFavo');
const ElementF = document.querySelector('.favorite');
const ButtonC = document.getElementById('buttoComment');
const ElementC = document.querySelector('.comment');
ElementF.style.display = 'none'; 
ElementC.style.display = 'none'; 
ButtonH.addEventListener('click', () => {
if (ElementH.style.display === 'none') {
    ElementH.style.display = 'flex'; 
    ElementF.style.display = 'none'; 
    ElementC.style.display = 'none'; 
} 
});
ButtonF.addEventListener('click', () => {
    if (ElementF.style.display === 'none') {
        ElementF.style.display = 'block'; 
        ElementH.style.display = 'none'; 
        ElementC.style.display = 'none'; 
    } 
    });
    ButtonC.addEventListener('click', () => {
        if (ElementC.style.display === 'none') {
            ElementC.style.display = 'block'; 
            ElementH.style.display = 'none'; 
            ElementF.style.display = 'none'; 
        } 
        });