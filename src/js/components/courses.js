;(function() {
  var courses = document.querySelectorAll('.courses__item');

  courses.forEach( function(course) {
    var button = course.querySelector('.courses__button');
    var link = course.querySelector('.courses__link');
    var header = course.querySelector('.courses__header');

    var courseHeight = getComputedStyle(course).height
    console.log(courseHeight);

    button.addEventListener('click', function() {
      openMenu(course, link, button);
    });
    header.addEventListener('click', function() {
      openMenu(course, link, button);
    });
  });

  function openMenu(course, link, button) {
    var courseCoord = course.getBoundingClientRect();
    var linkCoord = link.getBoundingClientRect();

    button.classList.toggle('courses__button-pressed');
    if (courseCoord.height == 50) {
      course.style.height = linkCoord.bottom - courseCoord.top + 20 + 'px';
    } else {
      course.style.height = 50 + 'px';
    }
  }
})();
