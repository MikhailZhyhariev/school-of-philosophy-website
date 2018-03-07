;(function() {
  try {
    var courses = document.querySelectorAll('.courses__item');

    courses.forEach( function(course) {
      var button = course.querySelector('.courses__button');
      var link = course.querySelector('.courses__link');
      var header = course.querySelector('.courses__header');

      window.addEventListener('resize', function() {
        if (window.innerWidth > 541) {
          course.removeAttribute('style');
        }
      }, true);

      button.onclick = header.onclick = function() {
        if (window.innerWidth < 542) {
          openMenu(course, link, button);
        } else {
          disableMenuStyle(course);
        }
      };
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
  } catch(err) {
    console.log(err);
  }
})();
