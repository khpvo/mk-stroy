import OrderForm from "../components/OrderForm.js";
import HeaderMenu from "../components/HeaderMenu.js";

const headerMenu = new HeaderMenu('header');
headerMenu.setEventListeners();

const orderForm = new OrderForm('order');
orderForm.setEventListeners();
