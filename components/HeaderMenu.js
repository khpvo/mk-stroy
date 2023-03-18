export default class HeaderMenu {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);

    this._menuBtn = this._header.querySelector('.header__menu-btn');
    this._headerMenu = this._header.querySelector('.menu__nav');
    this._headerInfo = this._header.querySelector('.header__info-container');
    this._page = document.querySelector('.page');

    this._headerCatalog = this._header.querySelector('.catalog');
    this._catalogBtn = this._headerCatalog.querySelector('.catalog__btn');
    this._catalogBtnArrow = this._headerCatalog.querySelector('.catalog__arrow-black');
    this._catalogList = this._headerCatalog.querySelector('.catalog__list');
  }

  _changeHeight(container, selectorOpened) {
    if (container.classList.contains(selectorOpened)) {
      container.style.height = `${container.scrollHeight}px`;
    } else {
      container.style.height = '0px';
    }
  }

  _toggleHeader() {
    if (this._header.classList.contains('header_dark-bg')) {
      setTimeout(() => {
        this._header.classList.remove('header_dark-bg');
      }, 400)
    }

    this._header.classList.toggle('header_opened');
    this._header.classList.add('header_dark-bg');
  }

  _toggleMenu() {
    this._page.classList.toggle('page_opened');

    this._menuBtn.classList.toggle('header__menu-btn_opened');
    this._headerCatalog.classList.toggle('catalog_opened');
    this._headerMenu.classList.toggle('menu__nav_opened');
    this._headerInfo.classList.toggle('header__info-container_opened');

    this._changeHeight(this._headerMenu, 'menu__nav_opened');
    this._changeHeight(this._headerInfo, 'header__info-container_opened');
    this._changeHeight(this._catalogList, 'catalog__list_opened');
  }

  _toggleCatalog() {
    this._catalogList.classList.toggle('catalog__list_opened');
    this._catalogBtnArrow.classList.toggle('catalog__arrow-black_opened');

    this._changeHeight(this._catalogList, 'catalog__list_opened');
  }

  setEventListeners() {
    this._menuBtn.addEventListener('click', () => {
      this._toggleMenu();
      this._toggleHeader();
    })

    this._catalogBtn.addEventListener('click', () => {
      this._toggleCatalog();
    })
  }
}
