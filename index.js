var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView : 1,
        },
        640: {
            slidesPerView : 2,
        },
        768: {
            slidesPerView : 2,
        },
        1024: {
            slidesPerView : 3,
        },
    },
});


// contact js start

const inputs = document.querySelectorAll(".input");

function focusfunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurfunc() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }

}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusfunc);
    input.addEventListener("blur", blurfunc);
})


// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "ashilpatel.aa134@gmail.com",
//         Password : "0C65EAF3DAFBC115830079BCA65914B7C7AD",
//         From : 'ashilpatel.aa134@gmail.com',
//         To : 'ap9045297754@gmail.com',
//         Subject : "New Contact Form Enquiry",
//         Body : "Name :" + document.getElementById("name").value
//         + "<br>Email :" + document.getElementById("email").value
//         + "<br>Phone no :" + document.getElementById("phone").value
//         + "<br>Message :" + document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }