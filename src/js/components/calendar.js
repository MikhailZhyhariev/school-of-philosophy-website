;(function() {
  try {
    var calendar = document.querySelector('.calendar');
    var activeItem = calendar.querySelector('.calendar__extended');
    var items = calendar.querySelector('.calendar__items');
    var dates = items.querySelectorAll('.calendar__item');

    dates.forEach(function(date, index) {
      date.addEventListener('click', function() {
        updateActiveElement(date, activeItem);

        var active = items.querySelector('div[active]');
        active.removeAttribute('active');
        date.setAttribute('active', '');
      })
    });

    function updateActiveElement(baseElement, targetElement) {
      var date = targetElement.querySelector('.calendar__item');

      var description = targetElement.querySelector('.calendar__description-text');
      description.innerHTML = baseElement.dataset.description;

      var newElement = createElement('div', 'calendar__item', baseElement.innerHTML);
      var time = createElement('p', 'calendar__month text_bold text_default', baseElement.dataset.time);

      newElement.appendChild(time);
      activeItem.replaceChild(newElement, date);
    }

    function createElement(tag, className, content='') {
      var element = document.createElement(tag);
      element.className = className;
      element.innerHTML = content;
      return element;
    }

  } catch(err) {
    console.log(err);
  }
})();
