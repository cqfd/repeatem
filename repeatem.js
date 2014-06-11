var interval = null;
$('#content-wrapper').on('click', '.section-track a.play-ctrl', function() {
  clearInterval(interval);
  var $playButton = $(this);
  var trackId = $playButton.attr('id').substring("play_ctrl_".length);
  var $track = $("#section-track-" + trackId);
  interval = setInterval(function() {
    if (!$track.hasClass('haarp-active')) {
      $playButton[0].click();
    }
  }, 1000);
});
