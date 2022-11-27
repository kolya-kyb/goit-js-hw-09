const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};
let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.startButton.addEventListener('click', e => {
  refs.stopButton.removeAttribute('disabled');
  e.currentTarget.setAttribute('disabled', true);
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopButton.addEventListener('click', e => {
  refs.startButton.removeAttribute('disabled');
  e.currentTarget.setAttribute('disabled', true);
  clearInterval(timerId);
});
