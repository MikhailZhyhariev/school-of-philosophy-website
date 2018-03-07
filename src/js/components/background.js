;(function() {
  var mainFront = document.querySelector('.main-front');
  var mainFrontTop = mainFront.getBoundingClientRect().top;

  var background = mainFront.querySelector('.main-front__background');

  var calendar = document.querySelector('.calendar__extended');
  var calendarTop = calendar.getBoundingClientRect().top;

  background.style.height = calendarTop - mainFrontTop + 'px';
})();
