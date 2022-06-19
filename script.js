$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    
});

/* typing animation script*/

//mobile
let btnMobile = document.getElementById('btn-Mobile')
function toggle() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggle)


//to close menu by home la a
let clHome = document.getElementById('clHome')
function home() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clHome.addEventListener('click', home)


//to close menu by about la a
const clAbout = document.getElementById('clAbout')
function about() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clAbout.addEventListener('click', about)


const clserv = document.getElementById('clserv')
function about() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clserv.addEventListener('click', about)


const clskil = document.getElementById('clskil')
function about() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clskil.addEventListener('click', about)



const clteam = document.getElementById('clteam')
function about() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clteam.addEventListener('click', about)


const clcontact = document.getElementById('clcontact')
function about() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active')
}
clcontact.addEventListener('click', about)



