const videoElement = document.querySelector('video');
const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('.progress-bar');
const playPauseButton = document.querySelector('.play-pause-button');
const sliders = document.querySelectorAll('input[type=range]');
const forward25Button = document.querySelector('.forward-25-button');
const backward10Button = document.querySelector('.backward-10-button');
let mouseDown = false;

const handlePlayPauseStateChange = () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

const handlePlayPauseButtonUpdate = () => {
  if (videoElement.paused) {
    playPauseButton.textContent = 'Play';
    videoElement.classList.remove('video-hover');
  } else {
    playPauseButton.textContent = 'Pause';
    videoElement.classList.add('video-hover');
  }
};

function handleSliderUpdate() {
  videoElement[this.name] = this.value;
}

function handleProgress() {
  const percent = (videoElement.currentTime / videoElement.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime =
    (e.offsetX / progressBarContainer.offsetWidth) * videoElement.duration;
  videoElement.currentTime = scrubTime;
}

videoElement.addEventListener('click', handlePlayPauseStateChange);
videoElement.addEventListener('play', handlePlayPauseButtonUpdate);
videoElement.addEventListener('pause', handlePlayPauseButtonUpdate);
videoElement.addEventListener('timeupdate', handleProgress);

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

sliders.forEach((slider) => {
  slider.addEventListener('change', handleSliderUpdate);
  slider.addEventListener('mousemove', handleSliderUpdate);
});

progressBarContainer.addEventListener('click', scrub);
progressBarContainer.addEventListener('mousedown', () => (mouseDown = true));
progressBarContainer.addEventListener('mouseup', () => (mouseDown = false));
progressBarContainer.addEventListener(
  'mousemove',
  (e) => mouseDown && scrub(e)
);
