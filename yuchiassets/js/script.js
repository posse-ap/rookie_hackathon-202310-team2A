const backbtn = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
    const scPosi = window.scrollY || document.documentElement.scrollTop;
    const whanum = 100;
    if (scPosi > whanum) {
        backbtn.style.display = 'block'; 
    } else {
        backbtn.style.display = 'none'; 
    }
});


backbtnbtn.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
});