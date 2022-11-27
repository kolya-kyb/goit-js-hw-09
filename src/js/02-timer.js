import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startButton: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let timerId = null;
const options = {
  locale: Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date().getTime() >= selectedDates[0].getTime()) {
      return Notify.failure('Виберіть час майбутньої події');
    }
    refs.startButton.removeAttribute('disabled');

    render(convertMs(selectedDates[0].getTime() - new Date().getTime()));
    refs.startButton.addEventListener('click', () => {
      disabledStartButton();
      Notify.success('Таймер запущено');
      timerId = setInterval(() => {
        let timerTime = selectedDates[0].getTime() - new Date().getTime();
        if (timerTime <= 0) {
          clearTimeout(timerId);
          Notify.info('Відлік закінчено');
          return;
        }
        render(convertMs(timerTime));
      }, 1000);
    });
  },
  // onChange(selectedDates) {},
};
flatpickr('#datetime-picker', options);
const fp = document.querySelector('#datetime-picker')._flatpickr;
disabledStartButton();

function disabledStartButton() {
  refs.startButton.setAttribute('disabled', true);
}
function render({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
