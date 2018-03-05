;(function() {
  var playBtn = document.getElementById('play');
  playBtn.onclick = function() {
    if (!playBtn.hasAttribute('play')) {
      playBtn.setAttribute('play', '');
    } else {
      playBtn.removeAttribute('play');
    }
  }
})();
;(function() {
  var playBtn = document.getElementById('play');
  var timeline = document.querySelector('.music__timeline');
  var lineBefore = timeline.querySelector('.music__timeline-before');
  var lineAfter = timeline.querySelector('.music__timeline-after');
  var controller = timeline.querySelector('.music__controller');

  var musicDuration = 2; // sec
  var step = 0.001; // 0.1% from music duration
  var timer;

  var widthLineBefore = 0;
  var widthLineAfter = 100;

  var timelineCoord = timeline.getBoundingClientRect();

  playBtn.addEventListener('click', function() {
    if (playBtn.hasAttribute('play')) {
      timer = setInterval(function() {
        if (widthLineAfter <= 0) {
          clearInterval(timer);
          playBtn.removeAttribute('play');
          widthLineBefore = 0;
          widthLineAfter = 100;
          return;
        }

        widthLineBefore += 0.1;
        widthLineAfter -= 0.1;
        updateTimelineStyle(widthLineBefore, widthLineAfter);
      }, musicDuration * step * 1000);
    } else {
      clearInterval(timer);
    }
  });

  lineBefore.onclick = lineAfter.onclick = function(e) {
    updateTimeline(e);
  }

  controller.onmousedown = controller.ontouchstart = function() {
    document.body.style.position = 'fixed';
    document.body.style.top = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    document.ontouchdown = document.onmousemove = function(e) {
      updateTimeline(e)
    }
    document.ontouchend = document.onmouseup = function() {
      document.body.style.position = 'static';
      document.onmousemove = null;
    }
  }

  controller.ondragstart = function() {
    return false;
  }

  function updateTimelineStyle(newBefore, newAfter) {
    controller.style.left = newBefore + '%';
    lineBefore.style.width = newBefore + '%';
    lineAfter.style.width = newAfter + '%';
  }

  function updateTimeline(e) {
    var newLeft = (e.clientX - timelineCoord.left)/timeline.offsetWidth * 100;

    if (newLeft < 0) newLeft = 0;
    var rightEdge = 100 - (controller.offsetWidth / timeline.offsetWidth) * 50;
    if (newLeft > rightEdge) newLeft = rightEdge;

    widthLineBefore = newLeft;
    widthLineAfter = 100 - newLeft;
    updateTimelineStyle(widthLineBefore, widthLineAfter);
  }
})();
;(function() {
  var volume = document.querySelector('.music__volume');
  var volumeItem = volume.querySelectorAll('.music__volume-item');

  volumeItem.forEach(function(item) {
    item.addEventListener('click', function() {
      clearVolumeLevel(item);
      setVolumeLevel(item);
    });
  });

  function setVolumeLevel(item) {
    if (!item) return;
    item.setAttribute('active', '');
    setVolumeLevel(item.previousElementSibling);
  }

  function clearVolumeLevel(item) {
    if (!item) return;
    item.removeAttribute('active');
    clearVolumeLevel(item.nextElementSibling);
  }
})();
