;(function() {
  try {
    var features = document.querySelector('.features');
    var background = features.querySelector('.features__background');

    timer = setInterval(function() {
      var paddingTop = getComputedStyle(features).paddingTop;
      var backgroundPosition = background.getBoundingClientRect();
      var lastChildBottom = features.lastChild.getBoundingClientRect().bottom;

      if (backgroundPosition.bottom == lastChildBottom) {
        background.style.top = paddingTop;
      } else {
        background.style.top = backgroundPosition.bottom + 'px';
      }
    }, 1000);
  } catch(err) {
    console.log(err);
  }
})();
