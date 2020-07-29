const videoElement = document.querySelector('video');
let isPlaying = false;

videoElement.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
});
