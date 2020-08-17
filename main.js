document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');

});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 800});
ScrollReveal().reveal('.cards-baner-one', { delay: 800});
ScrollReveal().reveal('.cards-baner-two', { delay: 800});
ScrollReveal().reveal('.social', { delay: 800});