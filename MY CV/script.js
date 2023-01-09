document.addEventListener('DOMContentLoaded', function () {
    let ketik = new TypeIt('#typing', {})
    for (let i = 1; i <= 100; i++) {
        ketik.type('Aku Programmer').pause(1000).delete(14).type('Aku suka matcha').pause(1000).delete(15)
    }
    ketik.go()
})

// Tombol toggle header
let hamburger = document.getElementById('hamburger-button')
let header = document.getElementById('header')
let main = document.getElementById('main')

//saat tombol hamburger di klik
let isHidden = false
hamburger.addEventListener('click', function () {
    if (isHidden == false) {
        header.classList.add('hidden')
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>"
        isHidden = true
    } else {
        header.classList.remove('hidden')
        hamburger.innerHTML = "<i class='fa-solid fa-xmark'></i>"
        isHidden = false
    } 
    console.log(isHidden)
})

// Saat dokumen website di scroll
window.onscroll = function(){
    if(document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop){
        hamburger.classList.add('active')
    }else{
        hamburger.classList.remove('active')
    }
}