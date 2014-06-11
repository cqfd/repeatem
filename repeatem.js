var interval = null;
$('#content-wrapper').on('click', '.section-track a.play-ctrl', function() {
  clearInterval(interval);
  var trackId = $(this).attr('id').substring("play_ctrl_".length);
  var $track = $("#section-track-" + trackId);
  interval = setInterval(function() {
    if (!$track.hasClass('haarp-active')) {
      $("a.play-ctrl", $track)[0].click();
    }
  }, 1000);
});
