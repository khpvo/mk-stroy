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

