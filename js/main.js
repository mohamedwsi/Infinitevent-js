//HEADER section

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click",()=>
{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
});
//(or)
// menu.onclick =()=>{
//     menu.classList.toggle('fa-times');
//     menu.classList.toggle("active"); }

window.addEventListener("scroll",()=>
{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
});


//HOME section

//for swiper
    var swiper = new Swiper(".home-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop:true,
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    document.querySelector(".regist").addEventListener("click",()=>{window.location.href="regis.html"})

    //REVIEW section  

    var swiper = new Swiper(".review-slider",{  //not working properly
      slidesPerView:1,
      grabCursor:true,
      loop:true,
      spaceBetween: 10,
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        700:{
          slidesPerView:2,
        },
        1050:{
          slidesPerView:3,
        },
      },
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    



    