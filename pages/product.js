import OrderForm from "../components/OrderForm.js";
import HeaderMenu from "../components/HeaderMenu.js";
import PopupWithImage from "../components/PopupWithImage.js";

const headerMenu = new HeaderMenu('header');
headerMenu.setEventListeners();

const swiperProduct = new Swiper('.product__swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.product__swiper-btn_next',
    prevEl: '.product__swiper-btn_back',
  },
  mousewheel: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: "horizontal",
      slidesPerView: 3,
    },
    425: {
      slidesPerView: 4,
    },
    768: {
      direction: "vertical",
      slidesPerView: 3,
    },
  },
});

const orderForm = new OrderForm('order');
orderForm.setEventListeners();

const mainImg = document.querySelector('.product__main-img');
mainImg.addEventListener('click', (evt) => {
  popupWithImage.open(evt.target.src);
});

const allProductImgs = document.querySelectorAll('.product__img');

Array.from(allProductImgs).forEach(img => {
  img.addEventListener('click', (evt) => {
    mainImg.src = evt.target.src;
  })
});

const popupWithImage = new PopupWithImage('.popup_type_fz-photo');
popupWithImage.setEventListeners();

