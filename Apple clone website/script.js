var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector(".ri-menu-fill");
let close = document.querySelector(".ri-close-fill");
let respoNav = document.querySelector(".respo-nav");

  menu.addEventListener('click', () => {
    respoNav.style.top = "0%";
  })
  close.addEventListener('click', () => {
    respoNav.style.top = "-100%";
  })



const infoBottom = document.querySelectorAll('.main .info .info-bottom');
const infoTop = document.querySelectorAll('.main .top .info-top');

let activeScreen;
infoTop.forEach(element =>{
    element.addEventListener('mouseover', ()=>{
        infoBottom.forEach((element) => {
            element.style.display = 'none';
        })
        if(element == infoTop[0]){
            infoBottom[0].style.display ='grid';
            activeScreen = infoBottom[0];
        }
        else if (element == infoTop[1]) {
            infoBottom[1].style.display ='grid';
            activeScreen = infoBottom[1];
        }
        return activeScreen;
    })
})


infoBottom.forEach(element =>{
  element.addEventListener('mouseover', ()=>{
      if(element == infoBottom[0]){
          infoBottom[0].style.display ='grid';
          activeScreen = element;
      }
      else if (element == infoBottom[1]) {
          infoBottom[1].style.display ='grid';
          activeScreen = element;
      }
  })
})

infoBottom.forEach(element =>{
  element.addEventListener('mouseout', ()=>{
      if(element == infoBottom[0]){
          infoBottom[0].style.display ='none';
      }
      else if (element == infoBottom[1]) {
          infoBottom[1].style.display ='none';
      }
  })
})