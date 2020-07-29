const videoElement = document.querySelector('video');
let isPlaying = false;

const forward25Button = document.querySelector('.forward-25');
const backward10Button = document.querySelector('.backward-10');

videoElement.addEventListener('click', () => {
  if (videoElement.paused) {
    console.dir(videoElement);
    videoElement.play();
  } else {
    videoElement.pause();
  }
});

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
