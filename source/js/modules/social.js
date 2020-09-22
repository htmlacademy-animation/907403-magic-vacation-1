export default () => {
  const socialBlock = document.querySelector(`.js-social-block`);
  if (socialBlock) {
    socialBlock.addEventListener(`mouseover`, function () {
      socialBlock.classList.add(`social-block--active`);
    });
    socialBlock.addEventListener(`mouseleave`, function () {
      socialBlock.classList.remove(`social-block--active`);
    });
  }
};
