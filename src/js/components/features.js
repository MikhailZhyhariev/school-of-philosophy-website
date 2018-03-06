;(function() {
  try {
    var features = document.querySelector('.features');
    var background = features.querySelector('.features__background');
    var items = features.querySelectorAll('.features__item');

    var featuresTop = features.getBoundingClientRect().top;

    timer = setInterval(function() {
      var paddingTop = getComputedStyle(features).paddingTop;
      var lastChildBottom = features.lastChild.getBoundingClientRect().bottom;

      var backgroundPosition = background.getBoundingClientRect();

      if (backgroundPosition.bottom >= lastChildBottom) {
        background.style.top = paddingTop;
      } else {
        background.style.top = backgroundPosition.bottom - featuresTop + 'px';
      }
    }, 1000);
  } catch(err) {
    console.log(err);
  }
})();
