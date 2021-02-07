const $nav = document.querySelector('.container > nav');
const $arrowBtn = document.querySelector('.toggle');

$arrowBtn.onclick = () => {
  $nav.classList.toggle('active');
};
