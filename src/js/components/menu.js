;(function() {
  try {
    var menuList = document.querySelector('.menu__list');
    var menuButton = document.querySelector('.menu__button');

    menuButton.onclick = function() {
      menuList.classList.toggle('menu__list-closed');
    }
  } catch(err) {
    console.log(err)
  }
})();
