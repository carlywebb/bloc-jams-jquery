{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    });

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);

    const previousSongIndex = currentSongIndex - 1;
    if (nextSongIndex <= album.songs.length) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
    });

    $('#time-control input').on('input', function (event) {
    });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
    //attempt to get total time??
    $('#total-time').text( duration );
  }, 1000);


//  calls player.setVolume() on input and passes it event.target.value.
  $('#volume-control input').on('input', function(event) {
          player.setVolume(event.target.value);

});

}
