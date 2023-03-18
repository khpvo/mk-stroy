import PopupWithImage from "../components/PopupWithImage.js";
import OrderForm from "../components/OrderForm.js";

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

const certificatesImages = document.querySelectorAll('.certificates__img');
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


const menuBtn = document.querySelector('.header__menu-btn');
const headerCatalog = document.querySelector('.catalog');
const headerMenu = document.querySelector('.menu__nav');
const headerInfo = document.querySelector('.header__info-container');
const header = document.querySelector('.header')
const page = document.querySelector('.page');

function changeHeight(container, selectorOpened) {
  if (container.classList.contains(selectorOpened)) {
    container.style.height = `${container.scrollHeight}px`;
  } else {
    container.style.height = '0px';
  }
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__menu-btn_opened');
  headerCatalog.classList.toggle('catalog_opened');
  headerMenu.classList.toggle('menu__nav_opened');
  headerInfo.classList.toggle('header__info-container_opened');
  header.classList.toggle('header_opened');
  page.classList.toggle('page_opened');

  changeHeight(headerMenu, 'menu__nav_opened');
  changeHeight(headerInfo, 'header__info-container_opened');
  changeHeight(catalogList, 'catalog__list_opened');
})



// Catalog
const catalogBtn = document.querySelector('.catalog__btn');
const catalogBtnArrow = catalogBtn.querySelector('.catalog__arrow-black');
const catalogList = document.querySelector('.catalog__list');

catalogBtn.addEventListener('click', () => {
  catalogList.classList.toggle('catalog__list_opened');
  catalogBtnArrow.classList.toggle('catalog__arrow-black_opened');

  changeHeight(catalogList, 'catalog__list_opened');
})
