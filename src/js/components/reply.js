;(function() {
  try {
    var form = document.getElementById('reply-form');
    var inputs = ['name', 'mail', 'comment'];
    var i = 0

    inputs.forEach(function(item) {
      form[item].onchange = function() {
        if (this.value) {
          form[item].setAttribute('data-done', '');
          i++;
        } else {
          form[item].setAttribute('data-wrong', '');
          i--;
        }

        if (i == inputs.length) {
          form.button.removeAttribute('disabled');
          form.button.setAttribute('data-done', '');
        }
      }
    });

    form.button.onclick = function() {
      console.log('SEND!!!');
    }
  } catch(err) {
    console.log(err);
  }
})();
