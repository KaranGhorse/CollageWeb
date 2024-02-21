var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // statics and footer
  let valuedisplay = document.querySelectorAll(".num")

let interval= 4000;

console.log(valuedisplay);

valuedisplay.forEach((valuedisplay) => {
    console.log(valuedisplay);
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-value"));
    let duretion = Math.floor(interval /endvalue );
    let counter = setInterval(()=>{
        startvalue += 1 ;
        valuedisplay.textContent = startvalue;
        if(startvalue==endvalue){
            clearInterval(counter);
        }


    },duretion)



});
