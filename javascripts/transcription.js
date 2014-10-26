$(document).ready(function(){
  console.log('transcription');

  var params = { allowScriptAccess: "always" };
  var atts = { id: "myytplayer" };
  //not sure what swfobject does, you need to define it. Canvas is a better option than a flash player?
  // swfobject.embedSWF("http://www.youtube.com/v/5_0dVHMpJlo?enablejsapi=1&playerapiid=ytplayer",
  //                    "ytapiplayer", "425", "356", "8", null, null, params, atts);

  function onYouTubePlayerReady(playerId) {
    ytplayer = document.getElementById("myytplayer");
  }

  function second(seconds) {
  if (ytplayer) {
  ytplayer.seekTo(seconds, true)
  }
  return false;
  }

});

