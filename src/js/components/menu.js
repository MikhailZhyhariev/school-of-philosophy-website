;(function() {
  try {
    var menuList = document.querySelector('.menu__list');
    var menuButton = document.querySelector('.menu__button');
    var links = menuList.querySelectorAll('.menu__link');

    var href = window.location.href

    links.forEach(function(link) {
      console.log(href.localeCompare(link.href));
      if (href.localeCompare(link.href) == 0) {
        link.setAttribute('data-active', '');
      } else {
        link.removeAttribute('data-active')
      }
    });

    menuButton.onclick = function() {
      menuList.classList.toggle('menu__list-closed');
    };
  } catch(err) {
    console.log(err)
  }
})();
