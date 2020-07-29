const videoElement = document.querySelector('video');
let isPlaying = false;

const playPauseButton = document.querySelector('.play-pause-button');
const forward25Button = document.querySelector('.forward-25-button');
const backward10Button = document.querySelector('.backward-10-button');

const handlePlayPauseStateChange = () => {
  if (videoElement.paused) {
    // console.dir(videoElement);
    videoElement.play();
    playPauseButton.innerHTML = 'Pause';
  } else {
    videoElement.pause();
    playPauseButton.innerHTML = 'Play';
  }
};

videoElement.addEventListener('click', handlePlayPauseStateChange);
playPauseButton.addEventListener('click', handlePlayPauseStateChange);

forward25Button.addEventListener('click', () => {
  if (!videoElement.paused) {
    videoElement.currentTime += 25;
  }
});

backward10Button.addEventListener('click', () => {
  if (!videoElement.paused) {
    videoElement.currentTime -= 10;
  }
});
