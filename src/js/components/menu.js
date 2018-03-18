;(function() {
  try {
    var menuList = document.querySelector('.menu__list');
    var menuButton = document.querySelector('.menu__button');
    var links = menuList.querySelectorAll('.menu__link');

    var pattern = /http[s]?:\/\/.*\/(.*)/;
    var url = String(window.location.href).match(pattern)[1] || 'index.html';

    links.forEach(function(link) {
      var href = link.href.match(pattern)[1];
      if (href == url) {
        link.setAttribute('data-active', '');
      } else {
        link.removeAttribute('data-active');
      }
    });

    menuButton.onclick = function() {
      menuList.classList.toggle('menu__list-closed');
    };
  } catch(err) {
    console.log(err)
  }
})();
