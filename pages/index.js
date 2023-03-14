import PopupWithImage from "../components/PopupWithImage.js";

const orderBtn = document.querySelector('.order__button');
const orderBtnTxt = orderBtn.querySelector('.order__button-txt');
const orderArrow = document.querySelector('.order__arrow');
const orderForm = document.forms['order'];

const orderFileInput = orderForm.querySelector('.order__input_type_file');
const orderFileName = orderForm.querySelector('.order__file-name');

orderBtn.addEventListener('click', () => {
  orderArrow.classList.toggle('order__arrow_opened');
  orderForm.classList.toggle('order__form_closed');

  if (orderForm.classList.contains('order__form_closed')) {
    orderForm.style.height = '0px';
    orderBtnTxt.textContent = 'раскрыть форму';
  } else {
    orderForm.style.height = `${orderForm.scrollHeight}px`;
    orderBtnTxt.textContent = 'скрыть форму';
  }
});

orderFileInput.addEventListener('change', () => {
  orderFileName.textContent = orderFileInput.files[0].name;
});

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
});

const swiperArticle = new Swiper('.article__swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: true,
});
