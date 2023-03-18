export default class Form {
  constructor(formName) {
    this._form = document.forms[formName];

    this._orderFileInput = this._form.querySelector('.order__input_type_file');
    this._orderFileName = this._form.querySelector('.order__file-name');
  }

  _toggleFormOpen() {
    this._orderArrow.classList.toggle('order__arrow_opened');
    this._form.classList.toggle('order__form_closed');
  }

  _controlFormState() {
    if (this._form.classList.contains('order__form_closed')) {
      this._form.style.height = '0px';
      this._orderBtnTxt.textContent = 'раскрыть форму';
    } else {
      this._form.style.height = `${this._form.scrollHeight}px`;
      this._orderBtnTxt.textContent = 'скрыть форму';
    }
  }

  _setFileName() {
    this._orderFileName.textContent = this._orderFileInput.files[0].name;
  }

  setEventListeners() {
    if (this._orderBtn = document.querySelector('.order__button')) {
      this._orderBtn = document.querySelector('.order__button');
      this._orderBtnTxt = this._orderBtn.querySelector('.order__button-txt');
      this._orderArrow = this._orderBtn.querySelector('.order__arrow');

      this._orderBtn.addEventListener('click', () => {
        this._toggleFormOpen();
        this._controlFormState();
      })
    }

    this._orderFileInput.addEventListener('change', () => {
      this._setFileName();
    })
  }
}
