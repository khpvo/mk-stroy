import PopupWithImage from "../components/PopupWithImage.js";
import OrderForm from "../components/OrderForm.js";
import HeaderMenu from "../components/HeaderMenu.js";
import { productionImages } from "../utils/constants.js";

const headerMenu = new HeaderMenu('header');
headerMenu.setEventListeners();

const orderForm = new OrderForm('order');
orderForm.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_type_fz-photo');
popupWithImage.setEventListeners();

Array.from(productionImages).forEach((img) => {
  img.addEventListener('click', () => {
    popupWithImage.open(img.src);
  })
});
