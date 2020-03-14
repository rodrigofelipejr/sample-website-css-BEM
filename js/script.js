const selectElement = (el) => document.querySelector(el)

selectElement('.header__icon-open').addEventListener('click', () => {
  selectElement('.header__list').classList.add('header__list--active')
})

selectElement('.header__icon-close').addEventListener('click', () => {
  selectElement('.header__list').classList.remove('header__list--active')
})