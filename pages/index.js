import PopupWithImage from "../components/PopupWithImage.js";
import OrderForm from "../components/OrderForm.js";
import HeaderMenu from "../components/HeaderMenu.js";
import { certificatesImages } from '../utils/constants.js';

const headerMenu = new HeaderMenu('header');
headerMenu.setEventListeners();

const orderForm = new OrderForm('order');
orderForm.setEventListeners();

const swiperHero = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.hero__btn_next',
    prevEl: '.hero__btn_back',
  },
});

const swiperCertificates = new Swiper('.certificates__swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: '.certificates__btn_next',
    prevEl: '.certificates__btn_back',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    // when window width is >= 1439px
    1439: {
      slidesPerView: 4,
    }
  }
});

const popupWithImage = new PopupWithImage('.popup_type_fz-photo');
popupWithImage.setEventListeners();

Array.from(certificatesImages).forEach((img) => {
  img.addEventListener('click', () => {
    popupWithImage.open(img.src);
  })
});

const swiperNews = new Swiper('.news__swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".news__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

const swiperArticle = new Swiper('.article__swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".article__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
