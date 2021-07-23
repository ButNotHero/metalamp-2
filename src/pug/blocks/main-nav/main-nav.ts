import documentReady from '../../../scripts/utils/documentReady';

const burgerBtnCloseCSSClass = 'burger-btn_close';
const contentIsHideBreakpoint = 1024;

/**
 * Проверка на то, больше ли ширина окна браузера клиента
 * чем media breakpoint
 * @return true - больше
 */
const isBPLessThanClientWidth = (): boolean => window.innerWidth >= contentIsHideBreakpoint;

const onToggleContentHide = (burger: any, content: any): void => {
  content.hidden = !isBPLessThanClientWidth();
  burger.classList.remove(burgerBtnCloseCSSClass);
};

const onBurgerClick = (burger: any, content: any): void => {
  if (!isBPLessThanClientWidth()) {
    if (burger.classList.contains(burgerBtnCloseCSSClass)) {
      burger.classList.remove(burgerBtnCloseCSSClass);
      content.hidden = true;
    } else {
      burger.classList.add(burgerBtnCloseCSSClass);
      content.hidden = false;
    }
  } else {
    burger.classList.remove(burgerBtnCloseCSSClass);
  }
};

documentReady(() => {
  const $mainNavs = document.querySelectorAll('.main-nav');

  $mainNavs.forEach((_$mainNav: any) => {
    const _$mainNavContent = _$mainNav.querySelector('.main-nav__content');
    const _$mainNavBurger = _$mainNav.querySelector('.burger-btn__main-nav');

    onToggleContentHide(_$mainNavBurger, _$mainNavContent);

    window.onresize = () => onToggleContentHide(_$mainNavBurger, _$mainNavContent);

    _$mainNavBurger.onclick = () => onBurgerClick(_$mainNavBurger, _$mainNavContent);
  });
});
