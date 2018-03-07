;(function() {
  try {
    var features = document.querySelector('.features');
    var background = features.querySelector('.features__background');
    var items = features.querySelectorAll('.features__item');


    timer = setInterval(function() {
      var featuresTop = features.getBoundingClientRect().top;
      var paddingTop = getComputedStyle(features).paddingTop;
      var active = features.querySelector('div[active]')
      var nextItem = active.nextElementSibling;

      if (nextItem == null) nextItem = background.nextElementSibling;
      var nextItemTop = nextItem.getBoundingClientRect().top;

      active.removeAttribute('active');
      nextItem.setAttribute('active', '');

      background.style.top = nextItemTop - featuresTop + 'px';
    }, 1000);
  } catch(err) {
    console.log(err);
  }
})();
