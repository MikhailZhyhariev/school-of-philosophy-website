;(function() {
  try {
    var filter = document.querySelector('.course-head__filter-menu');
    var filterItems = filter.querySelectorAll('.course-head__item');
    var coursesItems = document.querySelectorAll('.course-inner');

    filterItems.forEach(function(item, idx) {
      item.addEventListener('click', function() {
        var active = filter.querySelector('li[data-active]');

        active.removeAttribute('data-active');
        item.setAttribute('data-active', '');

        selectCourseCategory(coursesItems, idx);
      });
    });

    function selectCourseCategory(items, index) {
      items.forEach(function(item, idx) {
        if (idx == (index - 1)) {
          item.removeAttribute('hidden');
        } else if (index == 0) {
          item.removeAttribute('hidden');
        } else {
          item.setAttribute('hidden', '');
        }
      });
    }
  } catch(err) {
    console.log(err);
  }
})();
