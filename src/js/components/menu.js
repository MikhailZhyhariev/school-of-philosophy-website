;(function() {
  try {
    var menuList = document.querySelector('.menu__list');
    var menuButton = document.querySelector('.menu__button');

    menuButton.onclick = function() {
      if (menuList.style.display == 'none') {
        menuList.style.display = 'flex';
      } else {
        menuList.style.display = 'none';
      }
    }
  } catch(err) {
    console.log(err)
  }
})();
